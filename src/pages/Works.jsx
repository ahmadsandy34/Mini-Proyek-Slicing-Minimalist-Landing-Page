import React from "react";
import Hero from "../components/Hero";
import ListWorks from "../components/ListWorks";
import Client from "../components/Client";
import Hands from "../assets/works/hero/handsBackground2.svg";

const Works = () => {
  return (
    <>
      <Hero
        hands={Hands}
        text="The work we do, and the people we help."
        vers={2}
      />

      <section className="container mt-8 mb-4 lg:mb-20 lg:w-5/6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-[44px] font-bold">Featured Work</p>
          </div>
          <div className="lg:w-3/4 mx-0 lg:mx-auto lg:pt-32">
            <p className="text-3xl font-medium text-center lg:text-right">
              We are an award-winning creative & design agency committed to
              excellence since forever.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-8 lg:w-3/4 mx-auto">
        <ListWorks vers={2} />
      </section>

      <section className="container mt-12 lg:my-40 lg:w-3/4 mx-auto">
        <div className="w-3/4 mx-auto mb-12">
          <p className="text-3xl lg:text-[44px] font-bold text-center">
            We worked with the world’s biggest brands and the most innovative
            startups
          </p>
        </div>
        <Client vers={2} />
      </section>
    </>
  );
};

export default Works;
