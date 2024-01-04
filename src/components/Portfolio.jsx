import React from "react";
import PortfolioItem from "./PortfolioItem";
import { iOSData, ReactData } from "./data/portfolio";

function Portfolio({ handleButtonClick }) {
  const data = handleButtonClick === "iOS" ? iOSData : ReactData;
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
          >
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              detail={project.detail}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
