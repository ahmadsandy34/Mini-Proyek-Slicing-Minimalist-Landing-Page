import React from "react";

const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-3 right-3 lg:bottom-6 lg:right-6 bg-amber-400 text-white py-2 px-4 shadow-lg hover:bg-amber-500"
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default UpButton;
