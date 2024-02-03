import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

function PortfolioItem({ title, imgUrl, stack, link, detail }) {
  const abbreviations = [
    "JS",
    "Fire",
    "AVF",
    "Swift",
    "CORE",
    "OPEN",
    "Tail",
    "CMS",
    "Next",
    "Shad",
  ];

  const getFullForm = (abbreviation) => {
    // Add logic to return the full form based on the abbreviation
    switch (abbreviation) {
      case "AVF":
        return "AV Foundation";
      case "CMS":
        return "Sanity CMS";
      case "CORE":
        return "Core Data";
      case "CSS":
        return "Cascading Style Sheets";
      case "Fire":
        return "Google Firebase";
      case "JS":
        return "JavaScript";
      case "Next":
        return "Next.js";
      case "OPEN":
        return "open AI";
      case "Shad":
        return "Shadcn";
      case "Swift":
        return "SwiftUI";
      case "Tail":
        return "TailwindCSS";
      // Add more cases for other abbreviations
      default:
        return abbreviation;
    }
  };

  return (
    <div className="rounded-md overflow-hidden  bg-gray-50 hover:bg-slate-100">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full object-cover cursor-pointer rounded-lg p-2 pt-3"
      />
      <div>
        <h3 className="text-lg md:text-sl mb-2 md:mb-3 font-semibold text-left pl-4 pt-5 text-black">
          {title}
        </h3>
        <h3 className="text-sm md:text-sl mb-2 md:mb-3 text-left pl-4 pr-10 text-black">
          {detail}
        </h3>
        <div className="w-full p-4 text-black">
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm pb-3 ">
            {stack.map((item) => (
              <span className="group px-2 py-1 font-semibold border-1 rounded-full bg-slate-200 h-12 w-12 text-xs flex items-center justify-center">
                {item}
                <span className="opacity-0 group-hover:opacity-100 absolute bg-black text-white p-2 rounded-md mt-[-6rem]">
                  {abbreviations.includes(item) ? getFullForm(item) : item}
                </span>
              </span>
            ))}
          </p>
          <div className="flex">
            <button className="bg-onyx-300 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-between w-full m-1">
              Live Demo
              <LuArrowUpRight />
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={title}
              className="bg-onyx-300 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-between w-full m-1 hover:bg-slate-200"
            >
              Github
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
