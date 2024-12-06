import React from "react";
import Quote from "../assets/home/testimonial/quote.svg";

const Testimonial = ({ img, testimonial, name, job, right }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-row justify-center items-start gap-8">
        <div className="pt-2 flex-shrink-0">
          <img src={Quote} alt="Quote" className="lg:block" />
        </div>
        <div className="flex-grow max-w-xl">
          <p className="text-[22px] leading-relaxed">{testimonial}</p>
        </div>
      </div>

      {/* Common Layout for Profile Image and Name/Job */}
      <div className="flex flex-col text-center lg:text-left lg:flex-row gap-8 lg:gap-12 mt-8 mb-4 lg:mt-12 lg:pl-4 lg:w-3/4">
        <div className="flex justify-center lg:justify-start">
          <img
            src={img}
            alt={name}
            className="rounded-full w-24 lg:h-24"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-[19px] opacity-40 mt-1">{job}</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex-row lg:hidden justify-center items-start gap-8">
        <div className="pt-2 flex-shrink-0">
          <img src={Quote} alt="Quote" className="lg:block" />
        </div>
        <div className="max-w-[80vw]">
          <p className="text-[22px] leading-relaxed">{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
