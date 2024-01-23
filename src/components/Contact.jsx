import React from "react";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <SectionTitle title={"Contact"} />
      <div className="flex justify-start items-start">
        <form
          action="https://getform.io/f/9a76577d-22d0-480e-b9c5-a0df47f0465d"
          method="POST"
          className="flex flex-col w-full md:w-10/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-onyx-300 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
