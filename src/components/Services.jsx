import React from "react";

const Services = ({img, alt, text}) => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="p-8">
        <img src={img} alt={alt} />
      </div>
      <div className="p-8">
        <p className="text-lg font-bold text-center">{text}</p>
      </div>
    </div>
  );
};

export default Services;
