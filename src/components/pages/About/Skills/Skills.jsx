import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Multi-Objective Optimization",
    percentage: "95%",
  },
  {
    id: 2,
    title: "Network Design, Modeling and Optimization",
    percentage: "98%",
  },
  {
    id: 3,
    title: "Integer Programming",
    percentage: "90%",
  },
  {
    id: 4,
    title: "Convex Optimization",
    percentage: "70%",
  },
  {
    id: 5,
    title: "Optimization Under Uncertainty",
    percentage: "70%",
  },
  {
    id: 6,
    title: "Applied Deep Reinforcement Learning and Attention Based Networks",
    percentage: "60%",
  },
  {
    id: 7,
    title: "Advanced Data Analytics and Machine Learning",
    percentage: "50%",
  },
  {
    id: 8,
    title: "Git, Github",
    percentage: "80%",
  },
  {
  id: 9,
    title: "PulP, Gurobi, CPLEX, Python, C++, Pyomo, Ipopt",
    percentage: "80%",
  }
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
