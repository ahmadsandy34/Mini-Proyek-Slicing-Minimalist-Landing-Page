import React from 'react'
import Spotify from "../assets/home/client/spotify.svg";
import Dropbox from "../assets/home/client/dropbox.svg";
import Tesla from "../assets/home/client/tesla.svg";
import Reddit from "../assets/home/client/reddit.svg";
import Google from "../assets/home/client/google.svg";
import Stripe from "../assets/home/client/stripe.svg";
import DHL from "../assets/home/client/dhl.svg";
import Airbnb from "../assets/home/client/airbnb.svg";

const Client = ({vers}) => {
    return (
        <section className={vers === 1 ? "container mt-12 lg:mt-20 bg-slate-100" : "container"}>
        <div className={vers === 1 ? "lg:w-3/4 lg:mx-auto lg:py-20" : ""}>
          <div className={vers === 1 ? "grid grid-cols-1 lg:grid-cols-4 opacity-50" : "grid grid-cols-1 lg:grid-cols-4"}>
            <div className="p-12 border-b-2 border-r-2 border-t-2 lg:border-t-0">
              <img src={Spotify} alt="Spotify" />
            </div>
            <div className="p-12 lg:pt-16 border-b-2 border-r-2">
              <img src={Dropbox} alt="Dropbox" />
            </div>
            <div className="p-12 lg:pt-[74px] border-b-2 border-r-2">
              <img src={Tesla} alt="Tesla" />
            </div>
            <div className="p-12 border-b-2">
              <img src={Reddit} alt="Reddit" />
            </div>
            <div className="p-12 border-b-2 lg:border-b-0 border-r-2">
              <img src={Google} alt="Google" />
            </div>
            <div className="p-12 border-b-2 lg:border-b-0 border-r-2">
              <img src={Stripe} alt="Stripe" />
            </div>
            <div className="p-12 lg:pt-[74px] border-b-2 lg:border-b-0 border-r-2">
              <img src={DHL} alt="DHL" />
            </div>
            <div className="p-12 border-b-2 lg:border-b-0">
              <img src={Airbnb} alt="Airbnb" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Client