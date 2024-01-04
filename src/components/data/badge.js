import React from "react";

const badge = ({ src, alt, width, height }) => {
  return <img className="p-1" src={src} alt={alt} style={{ width, height }} />;
};

export default badge;
