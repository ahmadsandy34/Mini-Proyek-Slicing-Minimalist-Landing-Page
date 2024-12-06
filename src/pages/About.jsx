import React from "react";
import Hero from "../components/Hero";
import Client from "../components/Client";
import Team from "../components/Team";
import Success from "../components/Success";
import Hands from "../assets/works/hero/handsBackground2.svg";
import Gallery1 from "../assets/home/pastworks/gallery1.svg";
import Founder from "../assets/about/team/founder.svg";
import Developer from "../assets/about/team/developer.svg";
import Designer from "../assets/about/team/designer.svg";

const About = () => {
  return (
    <>
      <Hero hands={Hands} text="We specialize in problem solving." vers={2} />

      <section className="container mt-12 lg:w-3/4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left w-4/5 mx-auto lg:w-full">
          <div className="col-span-2">
            <p className="text-4xl lg:text-[44px] font-bold">Who we are</p>
            <p className="text-2xl lg:text-[30px] mt-4 lg:mt-8 lg:leading-relaxed">
              We love what we do and create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.We believe that the human dimensions essential to start
              any successful project and that this is where splendid emotional
              relationships between the company and people are born.
            </p>
          </div>
          <div className="lg:relative mt-4 lg:mt-0">
            <p className="lg:absolute lg:bottom-1/3 lg:right-0 text-3xl lg:text-[44px] font-bold opacity-50">
              EST. 2020
            </p>
          </div>
        </div>
      </section>

      <section className="container my-12 w-3/4 mx-auto overflow-hidden">
        <div className="w-full h-96 lg:h-[36rem]">
          <img
            src={Gallery1}
            alt="Gallery1"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container mt-12 lg:w-3/4 mx-auto">
        <div className="w-3/4 mx-auto mb-12">
          <p className="text-3xl lg:text-[44px] font-bold text-center">
            Meet the heroes behind the magic
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mt-8 lg:mt-20 ">
          <Team
            img={Founder}
            alt="Founder"
            name="Esther Howard"
            title="Founder"
          />
          <Team
            img={Developer}
            alt="Developer"
            name="Cody Fisher"
            title="Developer"
          />
          <Team
            img={Designer}
            alt="Designer"
            name="Brooklyn Simmons"
            title="Designer"
          />
        </div>
      </section>

      <Success />

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

export default About;
