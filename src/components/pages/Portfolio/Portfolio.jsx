import React from "react";
import image1 from "../../../images/portfolio/INFORMS 2025.png";
import image2 from "../../../images/portfolio/Tethys GeoScience.png";
import image3 from "../../../images/portfolio/Discrete Optimization.png";
import image4 from "../../../images/portfolio/USF IMSE.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Poster Competition, INFORMS Annual Meeting October 2025",
    link: "https://submissions.mirasmart.com/InformsAnnual2025/Itinerary/PresentationDetail.aspx?evdid=7343",
    description:
      "Selected for Poster Competition at INFORMS Annual Meeting 2025, Atlanta. This work was funded by US EPA and USACE.",
  },
  {
    id: 2,
    image: image2,
    title: "Invited Plenary Talk, Tethys GeoScience Summit July 2025",
    link: "https://tethysgeoscience.org/tethys-summit-2025-schedule/",
    description:
      "The Generalized Web Tool with Intuitive Graphic User Interface powered with Decsion Tree, Stochstic Multi-objective Network Optimization and GIS based Visualization ",
  },
  {
    id: 3,
    image: image3,
    title: "Published MMPs in Discrete Optimization by Elsevier",
    link: "https://doi.org/10.1016/j.disopt.2025.100903",
    description:
      "Feasibility Pump based Heuristics to Solve Maximum Multiplicative Programs is recently published in a prestigious peer reviewed journal Discrete Optimization by Elsevier. ",
  },
  {
    id: 4,
    image: image4,
    title: "Ph.D. Dissertation Defense Upcoming, Feb 2026",
    link: "https://www.usf.edu/engineering/imse/people/phd-students.aspx",
    description:
      "Potential Dissertation Title: Multiobjective Optimization for Sustainable Decision Making: Methods, Algorithms and Applications",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
