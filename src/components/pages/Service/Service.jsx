import React from "react";
import { FaBootstrap, FaCode, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";
import { IoNewspaperSharp } from "react-icons/io5";
import { TbSum } from "react-icons/tb";
import { IoIosWater } from "react-icons/io";
import { GiWaterRecycling } from "react-icons/gi";

const serviceData = [
  {
    id: 1,
    icon: <TbSum />,
    title: "Maximum Multiplicative Program, Discrete Optimization",
    description:
      "A criterion space search feasibility pump heuristic for solving maximum multiplicative programs",
    href: "https://doi.org/10.1016/j.disopt.2025.100903"
  },
  {
    id: 2,
    icon: <IoIosWater />,
    title: "AquaNutriOpt V1, Environmental Modelling & Software",
    description:
      "AquaNutriOpt: Optimizing nutrients for controlling harmful algal blooms in Python—A case study of Lake Okeechobee",
      href: "https://doi.org/10.1016/j.envsoft.2024.106025"
  },
  {
    id: 3,
    icon: < GiWaterRecycling/>,
    title: "AquaNutriOpt V2, Environmental Modelling & Software",
    description:
      "AquaNutriOpt II: A multi-period bi-objective nutrient optimization python tool for controlling harmful algal blooms — A case study of Lake Okeechobee",
      href: "https://doi.org/10.1016/j.envsoft.2025.106428"
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Effects of Best Management Practices in Nutrient Load Reduction, Ecological Engineering",
    description:
      "Effects of the spatial distribution of best management practices for watershed wide nutrient load reduction",
      href: "https://doi.org/10.1016/j.ecoleng.2024.107211"
  },
  {
    id: 4,
    icon: <SiTailwindcss />,
    title: "Submitted Paper, 2025",
    description:
      "An Integrated Web Tool for Nutrient Optimization and Watershed Model Selection in Harmful Algal Bloom Mitigation",
      href: "https://www.researchgate.net/publication/396316420_An_Integrated_Web_Tool_for_Nutrient_Optimization_and_Watershed_Model_Selection_in_Harmful_Algal_Bloom_Mitigation"
  },
  {
    id: 4,
    icon: <FaReact />,
    title: "Working Paper I",
    description:
      "Smart Adaptive Bender's Decomposition Based Method to Efficeintly Solve Large Scale  Stochastic Multi-Objective Network Optimization ",
  },
  {
    id: 5,
    icon: <FaReact />,
    title: "Working Paper II",
    description:
      "Deep Reinforcemnt Learning and Attention Based Network Framework for Real Time Decision Making in Robot Based Order Fulfillment and Picker Routing Problem in Automated Warehouses",
  }
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
