import React from "react";
import image1 from "../../../images/blog/blog-01.png";
import image2 from "../../../images/blog/blog-02.png";
import image3 from "../../../images/blog/blog-03.png";
import image4 from "../../../images/blog/blog-04.png";
import image5 from "../../../images/blog/teaching photo.png";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image5,
    title: "Teaching Portfolio",
    description: "View, navigate and download my up-to-date teaching portfolio as of March 2026. It includes my teaching philosophy, course materials, student feedback and other relevant information about my teaching experience, narrative and effectiveness. Different sections can be navigated by clicking heading and subheading in the table of contents",
    link: "/TeachingPortfolio.pdf",
  },
  {
    id: 2,
    image: image1,
    title: "Engineering Economic Analysis",
    description:
      "Taught Time Value of Money, Buy vs Lease Decisions, Investment Decision based on Costs and Return on Investment, Portfolio Optimization for Risk Averse Investments",
    link: "/EngineeringEconomicsSyllabus.pdf",
    },
  {
    id: 2,
    image: image2,
    title: "Python for Data Science",
    description:
      "Core Modules taught includes Python Programming: Basics to Object oriented, Pandas, Numpy, Sci-kit learn, Seaborn, Classification, Regression, Tree based Models, Neural Network Basics ",
    link: "/PythonForDataScienceSyllabus.pdf",
  },
  {
    id: 4,
    image: image3,
    title: "Optimization Methods with Applications",
    description:
      "Linear Programming, Network Optimization, Integer Programming, Goal Programming, Supply Chain and Logistics Application",
    link: "/OptimizationSyllabus.pdf",},
  {
    id: 5,
    image: image4,
    title: "Material Science and Metallurgy",
    description:
      "Materials, their properties, mining and treatment processes and applications to various engineering designs, and its impact on environment sustainability.",
    link: "/MaterialScienceBook.pdf",
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
