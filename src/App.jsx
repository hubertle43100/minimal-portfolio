import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/[slug]/Home";
import TheKitchen from "./components/[slug]/TheKitchen";
import Youtube from "./components/[slug]/Youtube";
import Projects from "./components/[slug]/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "TheKitchen":
        return <TheKitchen />;
      case "Youtube":
        return <Youtube />;
      case "Project":
        return <Projects />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <nav className="mb-8 mt-4">
        <div className="container gap-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold font-Oswald ml-2">
              <button onClick={() => setCurrentPage("Home")}>HUY</button>
            </h1>
            <h1 className="text-lg font-bold font-Oswald ml-2">
              <button onClick={() => setCurrentPage("Project")}>
                BUILDING PROJECTS SINCE 2020
              </button>
            </h1>
            <h1 className="text-lg font-bold font-Oswald ml-2 mr-2">
              <button onClick={() => setCurrentPage("TheKitchen")}>
                THE KITCHEN
              </button>
            </h1>
            <h1 className="text-lg font-bold font-Oswald ml-2">
              <button onClick={() => setCurrentPage("Youtube")}>YOUTUBE</button>
            </h1>
          </div>
        </div>
      </nav>
      {renderPage()}
    </>
  );
}

export default App;
