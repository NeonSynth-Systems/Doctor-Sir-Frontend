import React from "react";
import LoginImg from "../assets/logining.webp";
import LaptopMockup from "../assets/lapimg.webp";
import { MdOutlinePersonOutline, MdOutlineSlowMotionVideo } from "react-icons/md";
import ShinyText from "@/components/ShinyText";
import { FaMobileAlt, FaRegFilePdf, FaRegStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const Register_Page = () => {
  return (
    <div
      className=" w-full h-full bg-cover"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/80 flex flex-col items-center px-20 py-10">
        <div className=" w-full h-full flex space-x-10">
          <div className=" w-1/2 h-full flex flex-col justify-between">
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
            <p className=" font-bold text-6xl text-white mt-10 text-shadow-2xs text-shadow-black">
              Student
            </p>
            <p className=" font-bold text-6xl text-lime-500 text-shadow-2xs text-shadow-black">
              Registration
            </p>
            <p className=" mt-5 text-white w-80">
              අපගේ Student Learning Platform වෙත සම්බන්ධ වී නොමිලේ වීඩියෝ පාඩම්,
              නිබන්ධන සහ Premium පාඩම් වෙත ප්‍රවේශය ලබාගන්න.
            </p>
            <div className=" w-full h-full">
                <img src={LaptopMockup} alt="" className=" w-full h-full object-contain scale-x-[-1]"/>
            </div>
            <div className=" w-full grid grid-cols-5 gap-3 mt-30">
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <MdOutlineSlowMotionVideo className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">100+</p>
                <p className=" text-gray-300 text-xs">Video Lessons</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaRegFilePdf className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">PDF</p>
                <p className=" text-gray-300 text-xs">Notes</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaRegStar className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Premium</p>
                <p className=" text-gray-300 text-xs">Content</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaMobileAlt className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Mobile</p>
                <p className=" text-gray-300 text-xs">Friendly</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FiClock className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Learn</p>
                <p className=" text-gray-300 text-xs">Anytime</p>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-full">
            <form action="" className=" w-full h-full rounded-lg bg-emerald-900 border border-lime-400 px-10 py-5">
                <div className=" flex items-center justify-center mb-10">
                    <div className=" w-12 h-12 flex items-center justify-center rounded-full border border-lime-600">
                        <MdOutlinePersonOutline className=" text-3xl text-lime-300"/>
                    </div>
                    <p className=" font-bold text-3xl pl-5 text-white">Create <span className=" text-lime-400">Student</span> Account</p>
                </div>
                <input type="text" placeholder="Full Name" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="email" placeholder="Email" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="phone" placeholder="Phone Number" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="text" placeholder="School" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="text" placeholder="A/L Year" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="text" placeholder="District" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="password" placeholder="Password" className=" w-full mb-8 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <input type="password" placeholder="Confirm Password" className=" w-full mb-10 bg-lime-100 px-5 py-3 rounded-lg outline-none focus:border border-lime-600"/>
                <button className=" w-full bg-lime-600 py-5 rounded-lg text-white font-bold">Register Now</button>
                <div className=" w-full flex space-x-2 items-center my-5">
                    <div className=" w-full bg-white h-px"></div>
                    <p className=" text-white">Or</p>
                    <div className=" w-full bg-white h-px"></div>
                </div>
                <div className=" flex space-x-3 justify-center">
                    <p className=" text-white">Already have an account?</p>
                    <p className=" text-lime-400">Login</p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Page;
