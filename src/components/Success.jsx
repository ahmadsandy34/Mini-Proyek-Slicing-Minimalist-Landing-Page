import React from "react";

const Success = () => {
  return (
    <section className="container mt-12 relative lg:mt-20 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-4 p-12 justify-center items-center text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-rows-2">
          <p className="text-6xl font-bold text-amber-400">350 +</p>
          <p className="text-[28px] text-white">Clients Worldwide</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-rows-2 mt-8 lg:mt-0">
          <p className="text-6xl font-bold text-amber-400">20 +</p>
          <p className="text-[28px] text-white">Team Members</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-rows-2 mt-8 lg:mt-0">
          <p className="text-6xl font-bold text-amber-400">100 +</p>
          <p className="text-[28px] text-white">Projects Completed</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-rows-2 mt-8 lg:mt-0">
          <p className="text-6xl font-bold text-amber-400">85M +</p>
          <p className="text-[28px] text-white">Revenue Generated</p>
        </div>
      </div>
    </section>
  );
};

export default Success;
