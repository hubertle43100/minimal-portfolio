import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center">
      <h1 className="text-left font-SourceCodePro font-bold pb-2 pt-10 relative">
        <span className="bg-yellow-200 text-black px-2">{title}</span>
      </h1>
    </div>
  );
}

export default SectionTitle;
