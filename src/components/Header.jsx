import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="md:top-0 h-screen pt-10 ">
      <h1 className="text-8xl md:text-9xl font-bold font-Oswald">HUBERT LE</h1>
      <h1 className="text-8xl md:text-9xl font-bold font-Oswald">
        FRONTEND <br className="md:hidden" /> DEVELOPER
      </h1>
      <button
        className="fixed bottom-4 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
        onClick={scrollDown}
      >
        <FiChevronDown className="text-gray-800 w-6 h-6" />
      </button>
    </div>
  );
};

export default Header;
