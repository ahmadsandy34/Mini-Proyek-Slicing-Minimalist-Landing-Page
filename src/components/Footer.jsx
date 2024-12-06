import React from "react";
import Facebook from "../assets/home/footer/facebook.svg";
import Twitter from "../assets/home/footer/twitter.svg";
import GPlus from "../assets/home/footer/gplus.svg";
import Logo from "../assets/home/footer/logo.svg";
import SMS from "../assets/home/footer/sms.svg";

const Footer = () => {
  return (
    <footer className="container bg-black text-white text-center lg:text-left py-16 lg:pt-24 lg:pb-12 mt-12">
      <div className="w-full lg:w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="flex justify-center items-center lg:justify-normal lg:items-start">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="text-2xl font-medium">
              Dsgnr. is an award winning creative and design agency based in New
              York, USA.
            </p>
            <button className="relative border-2 border-yellow-400 p-4 lg:my-8 text-2xl w-3/4 mx-auto lg:mx-0">
              <img src={SMS} alt="SMS" className="lg:absolute lg:left-4 lg:bottom-4 inline-block mr-2" />
              info@dsgnr.com
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="grid justify-self-center text-2xl">
              <p className="font-bold mb-4">What We Do</p>
              <p className="mb-2">Intro</p>
              <p className="mb-2">Home</p>
              <p className="mb-2">Work</p>
              <p className="mb-2">Pricing</p>
              <p className="mb-2">Contact Us</p>
            </div>
            <div className="text-2xl">
              <p className="font-bold mb-4">Who We Are</p>
              <p className="mb-2">About</p>
              <p className="mb-2">News</p>
              <p className="mb-2">Testimonial</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 mb-8 lg:mb-0 text-2xl">
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center items-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopenner">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopenner">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://accounts.google.co.id/" target="_blank" rel="noreferrer noopenner">
              <img src={GPlus} alt="GPlus" />
            </a>
          </div>
        </div>
        <div className="text-center opacity-20 mt-8">
          <p className="text-2xl font-medium">Made with ❤️ by moyin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
