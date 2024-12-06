import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Hands from "../assets/worksdetail/hero/handsBackground3.svg";
import Mouse from "../assets/works/hero/mouse.svg";
import Blog1 from "../assets/home/blog/blog1.svg";

const BlogsDetail = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Hero hands={Hands} text="We write article with love." vers={3} />

      <div className="my-8 lg:w-3/4 mx-auto justify-items-center" ref={ref}>
        <img src={Mouse} alt="Mouse" />
      </div>

      <section className="container my-8 w-3/4 mx-auto overflow-hidden" >
        <div className="w-full h-96" >
          <img src={Blog1} alt="Blog1" className="w-full h-full object-cover" />
        </div>
        <div className="my-8 lg:my-16" >
          <p className="text-4xl lg:text-[100px] font-bold leading-tight">
            Build a stronger brand with no-code tools
          </p>
        </div>
        <div className="content my-4 lg:my-12">
          <p className="text-xl lg:text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where can I get some? There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogsDetail;
