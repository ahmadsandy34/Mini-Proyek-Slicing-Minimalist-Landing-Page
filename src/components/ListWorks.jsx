import React from "react";
import { Link } from "react-router-dom";
import Gallery1 from "../assets/home/pastworks/gallery1.svg";
import Gallery2 from "../assets/home/pastworks/gallery2.svg";
import Gallery3 from "../assets/home/pastworks/gallery3Full.svg";
import Gallery4 from "../assets/home/pastworks/gallery4.svg";
import Gallery5 from "../assets/home/pastworks/gallery5.svg";
import Gallery6 from "../assets/home/pastworks/gallery6.svg";
import Gallery7 from "../assets/home/pastworks/gallery7.svg";

const ListWorks = ({ vers }) => {
  return (
    <div
      className={
        vers === 1
          ? "grid grid-cols-1 lg:grid-cols-4 gap-1 mt-8"
          : "grid grid-cols-1 lg:grid-cols-2 gap-y-8 mt-8"
      }
    >
      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
          <img
            src={Gallery1}
            alt="Gallery1"
            className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Portfolio Title
            </p>
          </div>
        </Link>
      </div>

      {vers === 1 && (
        <div className="relative group row-span-2">
          <Link to={"/works/1"}>
            <img
              src={Gallery3}
              alt="Gallery3"
              className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Portfolio Title
              </p>
            </div>
          </Link>
        </div>
      )}

      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
        <img
          src={Gallery4}
          alt="Gallery4"
          className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Portfolio Title
          </p>
        </div>
        </Link>
      </div>

      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
        <img
          src={Gallery6}
          alt="Gallery6"
          className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Portfolio Title
          </p>
        </div>
        </Link>
      </div>

      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
        <img
          src={Gallery2}
          alt="Gallery2"
          className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Portfolio Title
          </p>
        </div>
        </Link>
      </div>

      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
        <img
          src={Gallery5}
          alt="Gallery5"
          className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Portfolio Title
          </p>
        </div>
        </Link>
      </div>

      <div
        className={
          vers === 1 ? "relative group" : "relative group justify-self-center"
        }
      >
        <Link to={"/works/1"}>
        <img
          src={Gallery7}
          alt="Gallery7"
          className="opacity-100 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center font-semibold bg-black bg-opacity-70 w-full p-2 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Portfolio Title
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ListWorks;
