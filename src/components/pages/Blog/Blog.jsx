import React from "react";
import image1 from "../../../images/blog/blog-01.png";
import image2 from "../../../images/blog/blog-02.png";
import image3 from "../../../images/blog/blog-03.png";
import image4 from "../../../images/blog/blog-04.png";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Engineering Economic Analysis and Portfolio Optimization",
    description:
      "Taught Time Value of Money, Buy vs Lease Decisions, Investment Decision based on Costs and Return on Investment, Portfolio Optimization for Risk Averse Investments",
  },
  {
    id: 2,
    image: image2,
    title: "Python for Data Science",
    description:
      "Core Modules taught includes Python Programming: Basics to Object oriented, Pandas, Numpy, Sci-kit learn, Seaborn, Classification, Regression, Tree based Models, Neural Network Basics ",
  },
  {
    id: 3,
    image: image3,
    title: "Optimization Methods with Applications",
    description:
      "Linear Programming, Network Optimization, Integer Programming, Goal Programming, Supply Chain and Logistics Application",
  },
  {
    id: 4,
    image: image4,
    title: "Material Science and Metallurgy",
    description:
      "Materials, their properties, mining and treatment processes and applications to various engineering designs, and its impact on environment sustainability.",
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
