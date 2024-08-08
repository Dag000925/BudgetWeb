import React from "react";
import { LuUsers } from "react-icons/lu";

const About: React.FC = () => {
  return (
    <div id="pageAbout" className="flex flex-col w-screen h-screen bg-green-100">
      <div className="h-[70%] flex flex-row w-screen text-black items-center justify-center">
        <div className="max-w-2xl text-center outline outline-gray-200 outline-offset-8">
          <h1 className="italic text-3xl font-semibold pb-5">random text</h1>
          <p className="text-left">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="pl-64">
          <img src="/assets/dog.png" alt="random pic" className="size-96" />
        </div>
      </div>
      <div className="h-[30%] flex flex-col bg-white text-black items-center justify-center">
        <LuUsers className="size-20" />
        <h1 className="text-black">active user info and something else</h1>
      </div>
    </div>
  );
};

export default About;
