import React, { useState } from "react";
import Portfolio from "./Portfolio";
import { iOSTechStack, ReactTechStack } from "./data/intro";
import SectionTitle from "./SectionTitle";

function Intro() {
  const [selectedButton, setSelectedButton] = useState("React");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const TechStack = ({ stack }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {stack.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={`Tech Badge ${index}`}
          style={{ width: item.width, height: 28 }}
        />
      ))}
    </div>
  );

  return (
    <div className="flex items-start justify-center flex-col text-center pt-20 pb-6">
      <div className="mb-3">
        <p className=" font-bold font-SourceCodePro text-left">I'm a</p>
        <button
          onClick={() => handleButtonClick("iOS")}
          className={`font-semibold font-Oswald rounded-sm ${
            selectedButton === "iOS" ? "text-onyx-300" : "text-gray-300"
          } ${selectedButton === "iOS" ? "iOS" : ""}
          sm:text-xs md:text-sm lg:text-base xl:text-base transition-transform duration-100 transform hover:-translate-y-1 hover:text-gray-500
          `}
        >
          <span className="text-2xl">iOS Engineer</span>
        </button>
        <button
          onClick={() => handleButtonClick("React")}
          className={`font-semibold font-Oswald rounded-sm ${
            selectedButton === "React" ? "text-onyx-300" : "text-gray-300"
          }
          pl-4 md:pl-3 sm:text-xs md:text-sm lg:text-base xl:text-base transition-transform duration-100 transform hover:-translate-y-1 hover:text-gray-500
          `}
        >
          <span className="text-2xl">Front-end React Developer</span>
        </button>
      </div>
      <div>
        <SectionTitle title={"Tech Stack"} />
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {selectedButton === "iOS" && <TechStack stack={iOSTechStack} />}
          {selectedButton === "React" && <TechStack stack={ReactTechStack} />}
        </div>
      </div>
      <SectionTitle title={"Project"} />
      <Portfolio handleButtonClick={selectedButton} />
    </div>
  );
}

export default Intro;
