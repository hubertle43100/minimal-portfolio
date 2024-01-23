import React from "react";
import PortfolioItem from "./PortfolioItem";
import { ReactData, iOSData } from "./data/portfolio";

function Portfolio({ handleButtonClick }) {
  const data = handleButtonClick === "React" ? ReactData : iOSData;
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
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
