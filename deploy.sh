#!/usr/bin/env bash
set -euo pipefail

# --- Config ---
PORTFOLIO_BRANCH="portfolio"
GH_PAGES_BRANCH="gh-pages"
COUNTER_FILE=".deploy_count"

# --- Helpers ---
abort() { echo "Error: $*" >&2; exit 1; }

# Ensure we're in a git repo
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || abort "Not a git repository."

# Ensure build exists
[[ -d build ]] || abort "Missing build/ directory. Run your build first."

# Remember the starting branch so we can return to it (should be 'portfolio')
START_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$START_BRANCH" != "$PORTFOLIO_BRANCH" ]]; then
  echo "⚠️ You are on '$START_BRANCH' not '$PORTFOLIO_BRANCH'. Proceeding anyway."
fi

cleanup() {
  # Always try to get back to the original branch
  git checkout -q "$START_BRANCH" 2>/dev/null || true
}
trap cleanup EXIT

echo "==> Step 1: Increment deploy counter and commit to '$PORTFOLIO_BRANCH'"
# Bump counter
CURRENT=0
if [[ -f "$COUNTER_FILE" ]]; then
  # shellcheck disable=SC2002
  CURRENT="$(cat "$COUNTER_FILE" || echo 0)"
fi
NEXT=$(( CURRENT + 1 ))
echo "$NEXT" > "$COUNTER_FILE"

# Add/commit/push on portfolio
git add -A
git commit -m "chore: pre-deploy snapshot (build #$NEXT)" --allow-empty
git push origin "$PORTFOLIO_BRANCH"

echo "==> Step 2: Stage build/ contents for gh-pages publish"
# Copy build/ contents to a temp dir BEFORE switching branches
TMPDIR="$(mktemp -d 2>/dev/null || mktemp -d -t deploy)"
cp -R build/. "$TMPDIR/"

echo "==> Step 3: Reset local '$GH_PAGES_BRANCH'"
# Delete local gh-pages if exists
if git show-ref --verify --quiet "refs/heads/$GH_PAGES_BRANCH"; then
  git branch -D "$GH_PAGES_BRANCH"
fi
git checkout -b "$GH_PAGES_BRANCH"

echo "==> Step 4: Replace branch contents with build artifacts"
# Remove everything except .git
find . -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
# Move build files into repo root
cp -R "$TMPDIR/." .
rm -rf "$TMPDIR"

# Optional: ensure GitHub Pages doesn’t run Jekyll
touch .nojekyll

# Commit site
git add -A
git commit -m "deploy: GitHub Pages (build #$NEXT)"

echo "==> Step 5: Force push to origin/$GH_PAGES_BRANCH"
git push -f origin "$GH_PAGES_BRANCH"

echo "==> Step 6: Switch back to '$PORTFOLIO_BRANCH'"
git checkout "$PORTFOLIO_BRANCH"

yarn

echo "✅ Done! Published build #$NEXT to '$GH_PAGES_BRANCH' and returned to '$PORTFOLIO_BRANCH'."
