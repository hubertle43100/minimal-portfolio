import React from "react";

function Timeline({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-stone-800 rounded-full mt-1.5 -left-1.5 border border-white" />
        <div className="group p-4 transition duration-300 border border-transparent hover:border-slate-500 rounded-lg">
          <p className="flex flex-col md:flex-row items-start gap-4 text-xs md:text-sm">
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white py-1">
                {title}
              </h3>
              <div className="flex gap-4 items-start">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                  {year}
                </span>
                <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-100">
                  {duration}
                </div>
              </div>
            </div>
          </p>

          <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-300 font-SourceCodePro pb-6">
            {details.split("\n").map((sentence, index) => (
              <React.Fragment key={index}>
                {sentence}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </li>
    </ol>
  );
}

export default Timeline;
