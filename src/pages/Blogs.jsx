import React from "react";
import Hero from "../components/Hero";
import Hands from "../assets/worksdetail/hero/handsBackground3.svg";
import Mouse from "../assets/works/hero/mouse.svg";
import ListBlog from "../components/ListBlog";

const Blogs = () => {
  return (
    <>
      <Hero hands={Hands} text="Read best articles from us." vers={3} />

      <div className="my-8 lg:w-3/4 mx-auto justify-items-center">
        <img src={Mouse} alt="Mouse" />
      </div>

      <ListBlog vers={2} />

      <div className="w-3/4 mx-auto my-12 text-center">
        <button className="text-2xl text-white bg-black font-semibold py-6 px-12">
          Load More
        </button>
      </div>
    </>
  );
};

export default Blogs;
