import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-8 mt-4">
      <div className="container gap-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold font-Oswald ml-2">HUY</h1>
          <h1 className="text-lg font-bold font-Oswald ml-2">
            BUILDING PROJECTS SINCE 2021
          </h1>
          <h1 className="text-lg font-bold font-Oswald ml-2">THE KITCHEN</h1>
          <h1 className="text-lg font-bold font-Oswald ml-2 mr-2">YOUTUBE</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
