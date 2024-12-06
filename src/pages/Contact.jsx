import React, { useState } from "react";
import DOMPurify from "dompurify";
import Hero from "../components/Hero";
import Client from "../components/Client";
import Success from "../components/Success";
import Hands from "../assets/worksdetail/hero/handsBackground.svg";
import Mouse from "../assets/works/hero/mouse.svg";
import FormImage from "../assets/contact/form/formImage.svg";
import Office from "../assets/contact/office/office.svg";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    url: "",
    project: "",
  });

  const handleChange = (e) => {
    const { name, value } = (e.target);
    const sanitizedValue = DOMPurify.sanitize(value);
    setData({ ...data, [name]: sanitizedValue });
  };

  return (
    <>
      <Hero hands={Hands} text="We would love to hear from you." vers={3} />

      <div className="my-8 lg:w-3/4 mx-auto justify-items-center">
        <img src={Mouse} alt="Mouse" />
      </div>

      <section className="container my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto gap-12">
          <div className="">
            <img src={FormImage} alt="FormImage" />
          </div>
          <div className="">
            <div className="lg:w-3/4 lg:justify-self-end">
              <p className="text-3xl lg:text-[44px] lg:leading-snug text-center lg:text-right font-bold">
                We'd love to hear from you
              </p>
            </div>
            <div className="mt-8">
              <form className="grid grid-cols-1 gap-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="text-2xl py-4 px-8 border placeholder-black border-black"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="text-2xl py-4 px-8 border placeholder-black border-black"
                />
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={data.url}
                  onChange={handleChange}
                  placeholder="Website URL*"
                  className="text-2xl py-4 px-8 border placeholder-black border-black"
                />
                <textarea
                  placeholder="Project Details*"
                  name="project"
                  id="project"
                  value={data.project}
                  onChange={handleChange}
                  className="w-full h-48 resize-none text-2xl py-4 px-8 border placeholder-black border-black"
                />
                <button
                  type="submit"
                  className="text-2xl py-4 px-8 bg-black text-white"
                >
                  Send Proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-16 lg:my-40 w-5/6 mx-auto">
        <div className="">
          <p className="text-3xl lg:text-[44px] font-bold text-center">
            Come stop by our office sometime
          </p>
        </div>
        <div className="relative w-full h-96 lg:h-[36rem] mt-12">
          <img
            src={Office}
            alt="Office"
            className="w-full h-full object-cover"
          />
          <div className="hidden lg:block lg:absolute lg:bottom-8 lg:left-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl lg:text-[34px] font-bold py-4 w-5/6 mx-auto">
                New York, USA
              </p>
              <p className="text-2xl w-5/6 mx-auto opacity-50">
                7626 W. 8th St.
              </p>
              <p className="text-2xl pb-4 w-5/6 mx-auto opacity-50">
                Massapequa, NY 11758
              </p>
              <p className="text-2xl w-5/6 mx-auto text-blue-400">
                info@dsgnr.com
              </p>
              <p className="text-2xl w-5/6 mx-auto">(543)890 98</p>
              <p className="text-xl w-5/6 mx-auto py-4">
                GET DIRECTIONS <i className="bi bi-arrow-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden my-12">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl lg:text-[34px] font-bold py-4 w-5/6 mx-auto">
                New York, USA
              </p>
              <p className="text-2xl w-5/6 mx-auto opacity-50">
                7626 W. 8th St.
              </p>
              <p className="text-2xl pb-4 w-5/6 mx-auto opacity-50">
                Massapequa, NY 11758
              </p>
              <p className="text-2xl w-5/6 mx-auto text-blue-400">
                info@dsgnr.com
              </p>
              <p className="text-2xl w-5/6 mx-auto">(543)890 98</p>
              <p className="text-xl w-5/6 mx-auto py-4">
                GET DIRECTIONS <i className="bi bi-arrow-right"></i>
              </p>
            </div>
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

export default Contact;
