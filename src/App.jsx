import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterItem from "./components/FooterItem";
import footer from "./components/data/footer";
import logoImage from "./public/Hubert.png";
import { annotate, annotationGroup } from "rough-notation";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");

    const highlight1 = annotate(h1, {
      type: "highlight",
      color: "#FEF08A",
      animate: true,
    });

    const highlight2 = annotate(h2, {
      type: "highlight",
      color: "#FEF08A",
      animate: true,
    });

    const group = annotationGroup([highlight1, highlight2]);

    highlight1.show();
    setTimeout(() => {
      highlight2.show();
    }, 1000);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const [selectedButton, setSelectedButton] = useState("React");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 text-stone-900 dark:text-white min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:sticky md:top-0 md:h-screen pt-10 ">
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="p-2 z-10 left-10 top-4 bg-onyx-300 dark:bg-white text-lg rounded-md dark:text-black"
            >
              {theme === "dark" ? sun : moon}
            </button>
            {/* Left column for Intro */}
            <div className="pt-20">
              <h3 className="pl-1 font-bold font-SourceCodePro md:mt-10">
                Hi, <span id="h1">my name</span> is
              </h3>
              <div className="flex items-center">
                <h1 className="text-5xl md:text-6xl mb-1 md:mb-3 font-bold font-Oswald pr-5">
                  Hubert Le
                </h1>
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-14 md:w-20  h-auto"
                />
              </div>
              <h1 className="text-2xl md:text-3xl mb-1 md:mb-3 font-bold font-Oswald text-onyx-300">
                I love to use my creative vision for coding front end for mobile
                and web.
              </h1>
              <p className=" font-bold font-SourceCodePro">
                I'm a front-end developer with <span id="h2">two years</span> of
                specialized experience in iOS. To broaden my career
                opportunities, I've transitioned into React and have plans to
                extend into React Native in the near future.
              </p>
              <div>
                <a
                  href="https://docs.google.com/document/d/11a477w9AtugxLExYpAYGRLVQL_YFCYu8MKw7g4nAkFE/edit?usp=sharing"
                  download="HubertLe_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-300 text-white px-4 py-2 rounded-md inline-block mt-2 transition duration-300 hover:shadow-md hover:bg-sage-300"
                >
                  View Resume
                </a>
              </div>
              <div className="container max-w-screen-lg mx-auto mt-4">
                <div>
                  <div className="flex flex-wrap justify-start gap-2">
                    {footer.map((footer) => (
                      <FooterItem
                        href={footer.href}
                        bgColor={footer.bgColor}
                        viewBox={footer.viewBox}
                        path={footer.path}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Right column for Timeline, Contact, and Footer */}
            <div className="flex-1 overflow-y-auto">
              <Intro />
              <Timeline />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
