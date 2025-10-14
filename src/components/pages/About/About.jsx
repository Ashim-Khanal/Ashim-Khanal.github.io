import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">

I am a Ph.D. candidate (All But Dissertation) in Industrial and Management Systems Engineering at the University of South Florida, Tampa, FL, specializing in multi-objective optimization, network optimization, optimization under uncertainty, advanced data analytics, and applied deep reinforcement learning. I hold a Bachelor's degree in Industrial Engineering from Tribhuvan University, Nepal, and an M.S. in Industrial Engineering from the University of South Florida.
My doctoral research focuses on developing innovative models, algorithms, and decision frameworks for real-world problems in environmental and social sustainability, sustainable supply chains, circular economy, and operations management. Notable contributions include: Watershed nutrient management for harmful algal bloom (HAB) control, funded by the U.S. Environmental Protection Agency and the U.S. Army Corps of Engineers.

Novel approaches to maximum multiplicative programs with applications in cooperative game theory, fairness, and reliability—published in top-tier journals such as Discrete Optimization and Environmental Modelling & Software.

Current work on Benders decomposition-based methods for solving stochastic multi-objective network optimization in applications like equity-based last-mile delivery, crowd-shipping, sustainable logistics, and aquatic biodiversity conservation.

Additionally, I’m actively reviewing state-of-the-art literature in real-time decision-making for production, warehousing, and logistics using applied deep reinforcement learning and attention-based neural networks.

I have presented my research at the INFORMS Annual Meeting in invited sessions since 2022, and recently served as a plenary speaker at the Tethys GeoScience Summit, where I showcased AquaNutriOpt—a fully automated, GIS-integrated web tool for HAB control that combines decision tree modeling, stochastic optimization heuristics, and hydrological simulation software selection.

As the former President of the INFORMS Student Chapter (2023–24), I led initiatives like the International Data Science Bootcamp, contributing to the chapter's recognition with the Summa Cum Laude Best Student Chapter Award at INFORMS 2024.

I am deeply passionate about driving innovation in management science through mathematical modeling, optimization, AI and machine learning, data-driven decision-making, and efficient computational methods.

🎓 Education

Ph.D. in Industrial Engineering (All But Dissertation)
University of South Florida, Tampa, FL, USA

M.S. in Industrial Engineering
University of South Florida, Tampa, FL, USA

B.E. in Industrial Engineering
Tribhuvan University, Nepal

            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
