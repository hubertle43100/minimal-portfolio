import React from "react";
import "animate.css";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center">
      <h1 className="text-left font-SourceCodePro font-bold pb-2 pt-10 relative animate__animated animate__fadeIn animate__slow animate__delay-2s">
        <span className="bg-yellow-200 text-black px-2">{title}</span>
      </h1>
    </div>
  );
}

export default SectionTitle;
