import React, { FC } from "react";
import Image from "next/image";
import ToastMsg from "../ToastMsg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <h2
          className="text-[40px] md:text-[60px] 
            font-bold text-gray-400"
        >
          Premium Car <span className="text-blue-600">Rental</span> in Pune
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <button
          className="p-2 mt-5 bg-blue-500 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all"
          onClick={onExploreClick}
        >
          Explore Cars
        </button>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="hero"
          width={400}
          height={500}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
