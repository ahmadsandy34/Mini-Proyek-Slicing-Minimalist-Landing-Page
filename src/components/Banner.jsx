import React from 'react'
import Hands from "../assets/home/banner/hands.svg";
import Logo from "../assets/home/banner/logo.svg";

const Banner = () => {
    return(
        <section className="container mt-12 relative lg:mt-20 overflow-hidden bg-amber-400">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 justify-center items-center text-center lg:text-left">
          <div className="my-6 lg:mb-16 lg:mt-6">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="mt-4 mb-8 lg:mb-16 lg:mt-6">
            <p className="text-[44px] font-bold">
              Grow Your Business. Build Great Products.
            </p>
          </div>
          <div className="mb-20 lg:mb-16 lg:mt-6 lg:mr-40">
            <button className="text-2xl text-white bg-black font-semibold p-6">
              Book a free call
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 lg:right-0">
            <img src={Hands} alt="Hands" className="translate-y-12 lg:translate-y-0" />
        </div>
      </section>
    )
}

export default Banner