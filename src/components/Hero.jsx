import React from "react";
import Background from "../assets/home/hero/yellowBackground.svg";
import Paint from "../assets/home/hero/yellowPaintBackground.svg";
import Circle from "../assets/home/hero/circle.svg";
import Mouse from "../assets/works/hero/mouse.svg";
import Navbar from "./Navbar";

const Hero = ({ hands, text, vers }) => {
  return (
    <header className="relative w-screen h-screen overflow-hidden">
      <Navbar />

      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-full h-full z-10 object-cover"
      />
      <img
        src={Paint}
        alt="Paint"
        className="absolute inset-0 w-full h-full z-20 object-cover"
      />
      <img
        src={hands}
        alt="Hands"
        className={
          vers === 1
            ? "absolute inset-0 w-full h-full z-30 object-cover translate-y-16"
            : vers === 2 ? "absolute bottom-0 z-30 object-cover" : "absolute bottom-0 lg:right-20 z-30 object-cover"
        }
      />

      <div
        className={
          vers === 1
            ? "absolute inset-0 lg:right-1/4 z-40 flex justify-center items-center mb-4"
            : "absolute inset-0 z-40 flex justify-center items-center mb-4"
        }
      >
        <div className={vers === 1 ? "px-4 lg:px-0 lg:ml-28" : "px-4 lg:px-0"}>
          <h1
            className={
              vers === 1
                ? "text-5xl lg:text-8xl font-bold mb-4 lg:mb-12 mx-auto lg:w-3/4"
                : "text-5xl lg:text-8xl font-bold mb-4 lg:mb-4 mx-auto lg:w-3/4 text-center"
            }
          >
            {text}
          </h1>

          {vers === 1 && (
            <div className="relative text-lg lg:text-2xl font-bold my-4 lg:mt-20 mx-auto lg:w-3/4 flex items-center">
              <div className="absolute -left-2 lg:-left-3 z-30">
                <img
                  src={Circle}
                  alt="Circle"
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
              </div>
              <span className="relative z-40 bg-transparent">
                <span className="relative z-50">BOOK A FREE CALL</span>
                <i className="bi bi-arrow-right ml-8"></i>
              </span>
            </div>
          )}

          {vers === 2 && (
            <div className="my-4 pb-16 lg:w-3/4 mx-auto justify-items-center"> 
              <img src={Mouse} alt="Mouse" />
            </div>
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Hero;
