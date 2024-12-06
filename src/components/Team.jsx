import React from "react";

const Team = ({ img, alt, name, title }) => {
  return (
    <section className="flex flex-col shadow-lg border-2 border-gray-200 rounded-lg my-4 px-4 lg:px-0">
      <div className="px-4 pt-4 pb-1">
        <img src={img} alt={alt} />
      </div>
      <div className="px-4 py-4">
        <p className="text-2xl lg:text-[34px] font-bold py-2">{name}</p>
        <p className="text-2xl opacity-50 py-2">{title}</p>
        <div className="flex flex-col lg:flex-row text-xl font-semibold opacity-50">
          <p className="py-2 mr-4">
            LINKED IN <i className="bi bi-arrow-up-right"></i>
          </p>
          <p className="py-2">
            INSTAGRAM <i className="bi bi-arrow-up-right"></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
