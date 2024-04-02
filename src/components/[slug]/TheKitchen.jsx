import React from "react";
import Kitchen from "./assets/Kitchen.png";
import { FaArrowRight } from "react-icons/fa";

import Food1 from "./assets/Bibimbap.jpg";
import Food2 from "./assets/Taco.jpg";
import Food3 from "./assets/Steak.jpg";
import Food4 from "./assets/Spam.png";
import Food5 from "./assets/Soup.jpg";

const TheKitchen = () => {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          className="w-full h-full object-none"
          src={Kitchen}
          alt="Full Screen Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6">
            <h1 className="text-center text-6xl font-bold font-Oswald">
              THE KITCHEN
            </h1>
          </div>
        </div>
      </div>
      <div className="flex p-10">
        <div className="w-1/2 p-8 flex flex-col items-start">
          <p className="text-4xl font-semibold font-Oswald">
            COOK WITH SIMPLICITY AND TASTE
          </p>
        </div>
        <div className="w-1/2 p-8 flex flex-col items-start">
          <p>
            I LOVE EXPLORING RECIPES THAT ARE NEW TO ME AND I TRY TO FIND THE
            MOST SIMPLEST DISH THAT HAS THE MOST FLAVOR BECAUSE EVERYTHING THAT
            I WANT TO COOK SHOULDN’T TAKE A WHOLE DAY TO ACCOMPLISH SO FOR ME
            IT’S ALL ABOUT COOKING FOOD THAT YOU CAN TAKE TO WORK AND FIND
            HARMONY IN.
          </p>
          <a
            href="https://www.notion.so/06cdd32ecc4447df921f5c1d52643bf1?v=34e4ebc84b304ab3825f4ba4eeccbe9e&pvs=4"
            target="_blank"
            className="flex items-center hover:opacity-50 transition-opacity mt-4"
          >
            <p className="underline font-bold">NOTION</p>
            <FaArrowRight className="ml-1" />
          </a>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <img src={Food1} alt="Food 1" className="w-1/5 object-cover" />
        <img src={Food2} alt="Food 2" className="w-1/5 object-cover" />
        <img src={Food3} alt="Food 3" className="w-1/5 object-cover" />
        <img src={Food4} alt="Food 4" className="w-1/5 object-cover" />
        <img src={Food5} alt="Food 5" className="w-1/5 object-cover" />
      </div>
    </>
  );
};

export default TheKitchen;
