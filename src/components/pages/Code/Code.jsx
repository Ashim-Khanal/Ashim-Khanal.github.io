import React from "react";
import CodeItem from "./CodeItem";
import image1 from "../../../images/blog/blog-01.png";
import image2 from "../../../images/blog/blog-02.png";
import image3 from "../../../images/blog/blog-03.png";
import image4 from "../../../images/blog/blog-04.png";

const codeData = [
  {
    id: 1,
    title: "AquaNutriOpt v2.0: An Open-Source Decision Support System for Nutrient Management to Control Harmful Algal Blooms",
    description:
      "AquaNutriOpt II is an open-source Python tool for optimizing nutrient management to control harmful algal blooms. It uses advanced multi-period and multi-objective optimization to identify the most cost-effective locations for implementing best management practices and treatment technologies. The web-based Graphical User Interface is developed in collaboration with Aquaveo, making the complex tool user-friendly for water resource managers.",
    url: "https://github.com/Ashim-Khanal/AquaNutriOpt-II"
    },
  {
    id: 2,
    title: "Maximum Multiplicative Programs",
    description:
      "Efficient and Novel Heuristic based on feasibility pump and hypotenuse cutting plane on criterion space to solve maximum multiplicative programs",
      url: "http://github.com/Ashim-Khanal/MIMMPs"
  },
    {
    id: 3,
    title: "Find more on my Github",
    description:
      "Find more codes on optimization, operations research, big data and deep reinforcement learning on my Github",
      url: "https://github.com/Ashim-Khanal?tab=repositories"
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
