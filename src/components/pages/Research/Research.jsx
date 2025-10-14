import React from "react";
import { FaBootstrap, FaCode, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ResearchItem from "./ResearchItem";
import { IoNewspaperSharp } from "react-icons/io5";
import { TbSum } from "react-icons/tb";
import { IoIosWater } from "react-icons/io";
import { GiWaterRecycling } from "react-icons/gi";

const researchData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Novel Multiobjective Optimization Method for Large Scale Network",
    description:
      "Smart Adaptive Bender's Decomposition Based Method to Efficeintly Solve Large Scale  Stochastic Multi-Objective Network Optimization. Applications to: Sustainable Supply Chain and Circular Economy, Watershed Waterbody and Water Quality Management."
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "Agentic AI Framework for Production and Operations Management",
    description:
      "Deep Reinforcemnt Learning and Attention Based Network Framework for Real Time Decision Making in Robot Based Order Fulfillment and Picker Routing Problem in Automated Warehouses. Application to Manufacturing and Service Opretations Management",
  },
    {
    id: 2,
    icon: <FaReact />,
    title: "Sustainability Analytics for Environment, Society, Human Behavior, Economy and Governance, ",
    description:
      "Deep Reinforcemnt Learning, Attention Based Network Framework, Multiobjective Optimization Methods, Algorithms and Framework for Smart and Sustainable Decision Making.",
  }
];

const Research = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {researchData.map((research, id) => (
          <ResearchItem service={research} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Research;
