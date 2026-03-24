import React from "react";
import CodeItem from "./CodeItem";
import image1 from "../../../images/blog/blog-01.png";
import image2 from "../../../images/blog/blog-02.png";
import image3 from "../../../images/blog/blog-03.png";
import image4 from "../../../images/blog/blog-04.png";

const codeData = [
  {
    id: 1,
    image: image1,
    title: "AquaNutriOpt v2.0: An Open-Source Decision Support System for Nutrient Management to Control Harmful Algal Blooms",
    description:
      "AquaNutriOpt II is an open-source Python tool for optimizing nutrient management to control harmful algal blooms. It uses advanced multi-period and multi-objective optimization to identify the most cost-effective locations for implementing best management practices and treatment technologies. The web-based Graphical User Interface is developed in collaboration with Aquaveo, making the complex tool user-friendly for water resource managers.",
    url: "https://github.com/Ashim-Khanal/AquaNutriOpt-II"
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

const Code = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-col md:px-4">
        {codeData.map((talk, id) => (
          <CodeItem talk={talk} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Code;
