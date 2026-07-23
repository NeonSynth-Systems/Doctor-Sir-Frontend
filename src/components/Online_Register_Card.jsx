import React from "react";
import LaptopMockup from "../assets/lapimg.webp";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { PiArrowArcLeftBold } from "react-icons/pi";

const Online_Register_Card = () => {
  return (
    <div className=" w-full h-full bg-black/50 p-20 flex flex-col items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" w-full h-full rounded-lg p-10 bg-linear-to-r from-emerald-950 via-emerald-900 to-lime-900 border border-lime-700 flex"
      >
        <div className=" w-1/2 flex flex-col h-full">
          <div className=" flex">
            <div className=" flex space-x-2 px-4 py-2 border border-lime-800 bg-emerald-800 items-center rounded-full">
              <FaStar className=" text-lime-400" />
              <p className=" text-lime-400 font-semibold">
                EXCLUSIVE FOR STUDENTS
              </p>
            </div>
          </div>
          <div className=" flex w-full items-center space-x-5 mt-5">
            <div className=" p-4 border border-lime-300/50 bg-emerald-800 flex items-center justify-center rounded-full">
              <FaVideo className=" text-lime-400 text-2xl" />
            </div>
            <p className=" text-white text-3xl font-bold">
              Online <span className=" text-lime-400">Learning Platform</span>
            </p>
          </div>
          <p className=" pt-5 text-white">
            ලියාපදිංචි වන සියලුම සිසුන්ට Online Learning Platform වෙත ප්‍රවේශය
            හිමිවේ. නොමිලේ Video Lessons, PDF නිබන්ධන සහ තෝරාගත් Premium පාඩම්
            ඕනෑම වේලාවක නැරඹිය හැක.
          </p>
          <div className=" w-full grid grid-cols-4 mt-5 gap-5">
            <div className=" w-full flex flex-col ">
              <div className=" rounded-sm border border-lime-400 flex items-center justify-center w-10 h-10">
                <MdOutlineSlowMotionVideo className=" text-lime-400 text-xl" />
              </div>
              <p className=" text-white pt-2 font-bold">නොමිලේ</p>
              <p className=" text-white">Video Lessons</p>
            </div>
            <div className=" w-full flex flex-col">
              <div className=" rounded-sm border border-lime-400 flex items-center justify-center w-10 h-10">
                <FaStar className=" text-lime-400 text-xl" />
              </div>
              <p className=" text-white pt-2 font-bold">Premium</p>
              <p className=" text-white">පාඩම්</p>
            </div>
            <div className=" w-full flex flex-col">
              <div className=" rounded-sm border border-lime-400 flex items-center justify-center w-10 h-10">
                <FaFilePdf className=" text-lime-400 text-xl" />
              </div>
              <p className=" text-white pt-2 font-bold">PDF</p>
              <p className=" text-white">නිබන්ධන</p>
            </div>
            <div className=" w-full flex flex-col">
              <div className=" rounded-sm border border-lime-400 flex items-center justify-center w-10 h-10">
                <FiClock className=" text-lime-400 text-xl" />
              </div>
              <p className=" text-white pt-2 font-bold">24/7</p>
              <p className=" text-white">ප්‍රවේශය</p>
            </div>
          </div>
          <div className=" w-full flex items-center mt-10">
            <button className=" w-65 bg-lime-500 rounded-lg px-10 py-3 cursor-pointer group hover:bg-emerald-200">
              <div className=" flex space-x-2 items-center justify-center">
                <p className=" text-lime-50 group-hover:text-black font-bold">
                  ලියාපදිංචි වන්න
                </p>
                <FaArrowAltCircleRight className=" text-white group-hover:text-black" />
              </div>
            </button>
            <PiArrowArcLeftBold className=" text-5xl text-lime-500 ml-5 mr-3" />
            <p className=" text-lime-500">සියලුම සිසුන්ට Platform ප්‍රවේශය</p>
          </div>
        </div>
        <div className=" w-1/2 h-full flex items-center justify-center">
          <img
            src={LaptopMockup}
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Online_Register_Card;
