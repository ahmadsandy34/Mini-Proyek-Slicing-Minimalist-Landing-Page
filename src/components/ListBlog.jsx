import React from "react";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import Blog1 from "../assets/home/blog/blog1.svg";
import Blog2 from "../assets/home/blog/blog2.svg";
import Blog3 from "../assets/home/blog/blog3.svg";

const ListBlog = ({ vers }) => {
  return (
    <section className="container mt-12 lg:mt-20">
      <div className="lg:w-3/4 lg:mx-auto lg:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between text-center">
          <div>
            <p className="text-4xl lg:text-[44px] font-bold">
              Check out our interesting articles
            </p>
          </div>
          <div className={vers === 1 ? "content-center" : "hidden"}>
            <p className="text-xl font-bold underline mt-4">SEE ALL</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mt-8 lg:mt-20 ">
          <Link to="/blogs/1">
            <Blog
              img={Blog1}
              alt="Blog1"
              title="Building a stronger brand with no-code tools"
              text="Learn about taking on a content design mindset from an expert in brand strategy and content design."
            />
          </Link>
          <Link to="/blogs/1">
            <Blog
              img={Blog2}
              alt="Blog2"
              title="Copywriters and designers: How to work better together"
              text="Good design and good copy go hand in hand. Here’s how to build closer collaboration between these two."
            />
          </Link>
          <Link to="/blogs/1">
            <Blog
              img={Blog3}
              alt="Blog3"
              title="A guide to photography website design"
              text="A collection of resources for photography website design covering everything"
            />
          </Link>
          {vers === 2 && (
            <>
              <Link to="/blogs/1">
                <Blog
                  img={Blog1}
                  alt="Blog1"
                  title="Building a stronger brand with no-code tools"
                  text="Learn about taking on a content design mindset from an expert in brand strategy and content design."
                />
              </Link>
              <Link to="/blogs/1">
                <Blog
                  img={Blog2}
                  alt="Blog2"
                  title="Copywriters and designers: How to work better together"
                  text="Good design and good copy go hand in hand. Here’s how to build closer collaboration between these two."
                />
              </Link>
              <Link to="/blogs/1">
                <Blog
                  img={Blog3}
                  alt="Blog3"
                  title="A guide to photography website design"
                  text="A collection of resources for photography website design covering everything"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListBlog;
