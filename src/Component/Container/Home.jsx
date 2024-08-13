import React from "react";
import hero from "../../assets/hero.jpg";

const Home = () => {
  return (
    <div id="home" className="section mt-24 min-h-screen">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-teal-400  mb-4">
            {" "}
            Your learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            An Industry oriented <br />
            ceative cources
          </div>
          <p className="text-sm leading-7 text-gray-400 max-w-sm">
            An exhaustive curriculum designed by our industry experts which will
            help you to get placed in your dream IT company
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-teal-400 rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray-400 rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[57%] p-2">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
