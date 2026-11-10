import React from "react";
import { FaBookOpen, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaArrowsRotate, FaFilePen, FaLocationDot } from "react-icons/fa6";
import { LuDna } from "react-icons/lu";
import Onlineimg from "../assets/onlineclass.webp";
import { BiLogoZoom } from "react-icons/bi";
import LaptopMockup from "../assets/lapimg.webp";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { PiArrowArcLeftBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const Classes_Section = () => {
  return (
    <div className=" w-full min-h-screen bg-black/50 p-10 md:p-20 flex flex-col items-center">
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" text-white text-2xl font-semibold"
      >
        අපගේ පන්ති
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" pt-10 text-emerald-200 text-xl text-center md:text-2xl"
      >
        සෑම සිසුවෙකුගේම අවශ්‍යතාවයට ගැළපෙන ජීව විද්‍යා පාඨමාලා
      </p>

      {/* Cards */}

      <div className=" w-full h-full lg:h-120 flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 mt-20">
        {/* Theory Card */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full lg:w-1/3 h-full rounded-xl bg-emerald-400 p-5 flex flex-col items-center"
        >
          <div className=" flex space-x-3 items-center">
            <LuDna className=" text-black text-xl" />
            <p className=" text-xl font-bold text-black">Theory Class</p>
          </div>
          <p className=" text-black pt-10 text-center">
            උසස් පෙළ ජීව විද්‍යාවේ සම්පූර්ණ විෂය නිර්දේශය මුල සිට සරලව,
            පැහැදිලිව හා සංකල්ප මූලිකව ඉගැන්වීම.
          </p>
          <ul className=" list-disc list-inside space-y-3 pt-5 text-black">
            <li>සම්පූර්ණ Theory ආවරණය</li>
            <li>සරල පැහැදිලි කිරීම්</li>
            <li>උසස් තත්ත්වයේ Notes</li>
            <li>Weekly Assignments</li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full lg:w-1/3 h-full md:h-50 lg:h-full flex flex-col md:flex-row lg:flex-col space-y-5 md:space-y-0 lg:space-y-5 space-x-0 md:space-x-5 lg:space-x-0"
        >
          {/* Paper Card */}

          <div className=" w-full md:w-1/2 lg:w-full h-1/2 md:h-full lg:h-1/2 rounded-xl bg-emerald-400 p-5 flex flex-col items-center">
            <div className=" flex space-x-3 items-center">
              <FaFilePen className=" text-black text-xl" />
              <p className=" text-xl font-bold text-black">Paper Class</p>
            </div>
            <p className=" text-black pt-10 text-center">
              පසුගිය විභාග ප්‍රශ්න, ආදර්ශ ප්‍රශ්න හා නව ප්‍රශ්න රටා විශ්ලේෂණය
              කරමින් විභාගයට හුරු කිරීම.
            </p>
          </div>

          {/* Revision  Card */}

          <div className=" w-full md:w-1/2 lg:w-full h-1/2 md:h-full lg:h-1/2 rounded-xl bg-emerald-400 p-5 flex flex-col items-center">
            <div className=" flex space-x-3 items-center">
              <FaBookOpen className=" text-black text-xl" />
              <p className=" text-xl font-bold text-black">Revision Class</p>
            </div>
            <p className=" text-black pt-10 text-center">
              විභාගයට පෙර සම්පූර්ණ විෂය නිර්දේශය කෙටි කාලයකින් ක්‍රමවත් ලෙස
              පුනරීක්ෂණය කිරීම.
            </p>
          </div>
        </div>

        {/* Reverse  Card */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full lg:w-1/3 h-full rounded-xl bg-emerald-400 p-5 flex flex-col items-center"
        >
          <div className=" flex space-x-3 items-center">
            <FaArrowsRotate className=" text-black text-xl" />
            <p className=" text-xl font-bold text-black">Reverse Class</p>
          </div>
          <p className=" text-black pt-10 text-center">
            දුර්වලතා හඳුනාගෙන, විභාගයට පෙර වැදගත් සංකල්ප නැවත ශක්තිමත් කරමින්
            විශ්වාසය ගොඩනැගීම.
          </p>
          <ul className=" list-disc list-inside space-y-3 pt-5 text-black">
            <li>දුර්වල පාඩම් ශක්තිමත් කිරීම</li>
            <li>ගැටලු නිරාකරණය</li>
            <li>මතක තබා ගැනීමේ ක්‍රම</li>
            <li>වේගවත් පුනරීක්ෂණය</li>
            <li>විභාග සූදානම</li>
          </ul>
        </div>
      </div>

      {/* Online Platform */}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" w-full h-full mt-10 rounded-lg px-5 py-10 md:p-10 bg-linear-to-r from-emerald-950 via-emerald-900 to-lime-900 border border-lime-600 flex"
      >
        <div className=" w-full flex flex-col h-full items-center">
          <div className=" flex w-full justify-center md:justify-end">
            <div className=" flex space-x-2 px-3 md:px-4 py-2 border border-lime-800 bg-emerald-800 items-center rounded-full">
              <FaStar className=" text-lime-400 text-xs md:text-base" />
              <p className=" text-lime-400 font-semibold text-xs md:text-base">
                EXCLUSIVE FOR STUDENTS
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row w-full items-center justify-center space-y-3 md:space-y-0 space-x-0 md:space-x-5 mt-5">
            <div className=" p-4 border border-lime-300/50 bg-emerald-800 flex items-center justify-center rounded-full">
              <FaVideo className=" text-lime-400 text-2xl" />
            </div>
            <p className=" text-white text-3xl font-bold text-center">
              Online <span className=" text-lime-400">Learning Platform</span>
            </p>
          </div>
          <p className=" lg:w-150 pt-10 text-white md:text-center">
            ලියාපදිංචි වන සියලුම සිසුන්ට Online Learning Platform වෙත ප්‍රවේශය
            හිමිවේ. නොමිලේ Video Lessons, PDF නිබන්ධන සහ තෝරාගත් Premium පාඩම්
            ඕනෑම වේලාවක නැරඹිය හැක.
          </p>
          <div className=" w-full lg:w-160 grid grid-cols-2 md:grid-cols-4 mt-10 gap-5">
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
          <div className=" w-full flex items-center justify-center mt-15">
            <button className=" w-65 bg-lime-500 rounded-lg px-10 py-3 cursor-pointer group hover:bg-emerald-200">
              <div className=" flex space-x-2 items-center justify-center">
                <Link to="/olp/register" target="blank">
                  <p className=" text-lime-50 group-hover:text-black font-bold text-base md:text-sm lg:text-base">
                    ලියාපදිංචි වන්න
                  </p>
                </Link>
                <FaArrowAltCircleRight className=" text-white group-hover:text-black" />
              </div>
            </button>
            <PiArrowArcLeftBold className=" hidden md:block text-5xl text-lime-500 ml-5 mr-3" />
            <p className="hidden md:block text-lime-500">සියලුම සිසුන්ට Platform ප්‍රවේශය</p>
          </div>
        </div>
      </div>

      {/* Classes time */}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-20"
      >
        <div className="w-full md:w-50 lg:w-full flex flex-col items-center md:items-start text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">2027 Theory</p>
          <div className=" flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>බදාදා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-y-0 space-x-0 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">පෙ.ව. 08.30 - 12.30</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-amber-500">
            <FaLocationDot />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය වෙන්නප්පුව</p>
          </div>
        </div>
        <div className=" w-full md:w-50 lg:w-full text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">2027 Revision</p>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>බ්‍රහස්පතින්දා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">පෙ.ව. 08.00 - 01.30</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-amber-500">
            <FaLocationDot />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය වෙන්නප්පුව</p>
          </div>
        </div>
        <div className=" w-full md:w-50 lg:w-full text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">Full Paper Class</p>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>බ්‍රහස්පතින්දා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">ප.ව. 02.30 - 05.30</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-blue-400">
            <TbWorld className=" text-xl" />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය / Online</p>
          </div>
        </div>
        <div className=" w-full md:w-50 lg:w-full text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">පළාත් ප්‍රශ්න පත්‍ර සාකච්ඡාව <span className=" text-red-400">FREE</span></p>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>බදාදා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">ප.ව. 08.00 - 11.30</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-blue-400">
            <TbWorld className=" text-xl" />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය / Online</p>
          </div>
        </div>
        <div className=" w-full md:w-50 lg:w-full text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">2028 Theory</p>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>සෙනසුරාදා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">පෙ.ව. 08.30 - 12.30</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-amber-500">
            <FaLocationDot />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය වෙන්නප්පුව</p>
          </div>
        </div>
        <div className=" w-full md:w-50 lg:w-full text-white p-3 border border-lime-300 rounded-lg backdrop-blur-sm">
          <p className=" text-lg font-semibold pb-5 text-center md:text-start">2028 Paper</p>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-emerald-300">
            <FaCalendarAlt />
            <p>අගහරුවාදා</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 py-3 text-red-300">
            <FaClock />
            <p className=" text-sm md:text-base">ප.ව. 03.00 - 05.00</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start space-y-2 md:space-x-5 text-amber-500">
            <FaLocationDot />
            <p className=" text-sm md:text-base">Chemist ඇකඩමිය වෙන්නප්පුව</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes_Section;
