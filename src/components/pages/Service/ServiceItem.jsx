import React from "react";

const ServiceItem = (props) => {
  const { icon, title, description, href } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-blue-100 text-blue-600 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2 inline-block hover:text-blue-700 transition"
        >
          ...more
        </a>
      </div>
    </div>
  );
};



export default ServiceItem;
