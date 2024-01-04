import React from "react";

function FooterItem({ href, bgColor, viewBox, path, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-md`}
    >
      <svg
        className="w-5 h-5 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path d={path} />
      </svg>
      <span>{title}</span>
    </a>
  );
}

export default FooterItem;
