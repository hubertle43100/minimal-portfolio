import React, { useEffect, useState } from "react";
import Header from "../Header";
import Intro from "../Intro";
import Portfolio from "../Portfolio";
import Timeline from "../Timeline";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div className="bg-white text-stone-900 min-h-screen font-inter">
        <div className="max-w-5xl mx-auto gap-8">
          <div className="md:top-0 md:h-screen pt-10 ">
            <Header />
          </div>
          <div>
            {/* Right column for Timeline, Contact, and Footer */}
            <div>
              {/* Right column for Timeline, Contact, and Footer */}
              <div className="flex-1 overflow-y-auto">
                <Intro />
                <Portfolio />
                <Timeline />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
