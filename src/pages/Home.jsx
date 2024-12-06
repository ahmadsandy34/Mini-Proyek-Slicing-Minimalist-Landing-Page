import React from "react";
import Pen from "../assets/home/services/pen.svg";
import Search from "../assets/home/services/search.svg";
import Briefcase from "../assets/home/services/briefcase.svg";
import Scroll from "../assets/home/services/scroll.svg";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import ListWorks from "../components/ListWorks";
import Client from "../components/Client";
import ListBlog from "../components/ListBlog";
import Hands from "../assets/home/hero/handsBackground.svg";
import SideImage from "../assets/home/process/sideImage.svg";
import Lightbulb from "../assets/home/process/lightbulb.png";
import Rocket from "../assets/home/process/rocket.png";
import Target from "../assets/home/process/target.png";
import Male from "../assets/home/testimonial/male.svg";
import Female from "../assets/home/testimonial/female.svg";

const Home = () => {
  return (
    <>
      <Hero hands={Hands} text="Let’s create something great together." vers={1} />
      <section className="container mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-3/4 mx-auto">
          <Services img={Pen} alt="Pen" text="EXCEPTIONAL DESIGN" />
          <Services img={Search} alt="Search" text="IN-DEPTH RESEARCH" />
          <Services img={Briefcase} alt="Briefcase" text="PRODUCT MANAGEMENT" />
          <Services img={Scroll} alt="Scroll" text="NO-CODE DEVELOPMENT" />
        </div>
      </section>

      <section className="container mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] gap-12 w-5/6 mx-auto">
          <div className="flex flex-row justify-center items-end">
            <p className="text-8xl font-bold text-yellow-400">hello</p>
            <p className="text-8xl font-bold">.</p>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-[44px] font-bold">
              Award winning agency specializing in creative design
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-rows-2 text-center lg:text-left lg:ml-8">
            <p className="text-xl font-medium pt-4">
              We help businesses grow, launch products and build enduring
              relationships with our communities.
            </p>
            <p className="lg:flex lg:justify-self-start lg:self-center text-xl font-bold underline underline-offset-8 my-4 lg:mt-0">
              OUR INFO
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-300 my-20 lg:my-40" />

      <section className="container mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-3/4 mx-auto mb-4 lg:mb-24">
          <h2 className="text-4xl mb-8 lg:mb-0 lg:text-[44px] font-bold text-center">
            Our Work So Far
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-xl font-bold ">
            <button className="underline underline-offset-8">ALL</button>
            <button className="opacity-50">BRANDING</button>
            <button className="opacity-50">ILLUSTRATION</button>
            <button className="opacity-50">PRODUCT DESIGN</button>
          </div>
        </div>
        <ListWorks vers={1} />
      </section>

      <section className="container bg-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto lg:gap-12 pt-12 lg:pt-40">
          <div>
            <img src={SideImage} alt="SideImage" />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-[44px] font-bold text-center mt-8 lg:mt-0 lg:text-left lg:pr-40">
                A simple, yet effective three step process.
              </p>
            </div>
            <Process
              img={Lightbulb}
              alt="lightbulb"
              title="Idea Initiation"
              text="For a start, we’ll uncover what makes you stand apart and creatively position your brand and business."
            />
            <Process
              img={Target}
              alt="target"
              title="Execution"
              text="To deliver exceptionally, we dig deep into a brand’s essence and values, clearly understand them, then inject them into the design."
            />
            <Process
              img={Rocket}
              alt="rocket"
              title="Launch"
              text="We provide full-service solutions to help you launch, market, and grow your business."
            />
          </div>
        </div>
        <div className="text-center mt-12 w-3/4 mx-auto lg:mt-40 pb-12">
          <p className="text-xl lg:text-2xl font-medium">
            Wherever you are in your journey, we’d love to hear from you.{" "}
            <span className="font-bold underline">Book a free call</span>
          </p>
        </div>
      </section>

      <section className="container mt-12 lg:mt-20">
        <div className="lg:w-3/4 mx-auto">
          <p className="text-[44px] lg:pl-28 font-bold text-center lg:text-left">
            What our clients say about us
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-28 mt-8 w-4/5 mx-auto lg:mt-20">
          <Testimonial
            img={Male}
            testimonial="I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!"
            name="Milton Austin"
            job="Product Manager, Slack"
          />
          <Testimonial
            img={Female}
            testimonial="Great work ethic and very reliable! Brooklyn was our logo designer. She walked us through many iterations and guided us on all aspects of the process. Very professional, will use them again soon!”"
            name="Jane Cooper"
            job="Co-founder, catco."
          />
        </div>
      </section>

      <Client vers={1}/>

      <ListBlog vers={1}/>

    </>
  );
};

export default Home;
