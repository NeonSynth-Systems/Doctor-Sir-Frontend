import React from "react";
import HeroImg from "../assets/heroimg.png";
import { FaStethoscope } from "react-icons/fa";
import ShinyText from "@/components/ShinyText";
import { Link } from "react-router-dom";

const Hero_Section = () => {
  return (
    <div className=" w-full h-screen relative flex flex-col bg-black/50 items-center px-20 ">
      <div className=" w-full h-full flex justify-between space-x-2 pt-14">
        {/* Left Side */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-1/2 space-y-8 pt-10"
        >
          <ShinyText
            text="ඩොක්ටර් සර්ගේ Bio පන්තිය"
            speed={2}
            delay={0}
            color=" #a3e635"
            shineColor="#d9f99d"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-4xl font-bold font-['Maname'] h-12"
          />
          <p className=" text-white text-5xl font-bold pt-5">
            A/L ජීව විද්‍යාව
          </p>
          <div className=" flex space-x-5 items-center ">
            <FaStethoscope className=" text-emerald-400 text-2xl" />
            <p className=" text-xl text-emerald-400 text-shadow-lg text-shadow-black font-semibold">
              MEDICINE ගිය කෙනෙක්ගෙන් හරිම පාර දැනගන්න...
            </p>
          </div>
          <p className=" text-white text-xl w-120 pb-5">
            ශ්‍රී ලංකාවේ A/L ජීව විද්‍යාව සඳහා සංකල්ප මූලික කරගත් නවීන ඉගැන්වීම්
            ක්‍රමවේදයක් සමඟ විභාග ජයග්‍රහණය කරා.
          </p>
          <div className=" flex space-x-5 ">
            <Link to="/olp/register" target="blank">
              <button className=" bg-emerald-800 px-10 py-3 rounded-full text-gray-200 hover:bg-lime-400 hover:text-black font-bold cursor-pointer">
                Register
              </button>
            </Link>
            <button className=" bg-gray-300 text-emerald-800 px-10 py-3 rounded-full hover:bg-lime-400 hover:text-black font-bold cursor-pointer">
              WhatsApp Channel
            </button>
          </div>
        </div>

        {/* Right Side */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-1/2 h-full flex flex-col justify-end overflow-hidden"
        >
          <img src={HeroImg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
