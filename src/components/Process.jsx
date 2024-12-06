import React from "react";

const Process = ({ img, alt, title, text }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center lg:text-left lg:justify-normal lg:items-start lg:flex-row mt-8 lg:mt-0">
      <div>
        <img src={img} alt={alt} />
      </div>
      <div className="w-3/5 lg:pt-8">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl font-medium opacity-60 pt-2">{text}</p>
      </div>
    </div>
  );
};

export default Process;
