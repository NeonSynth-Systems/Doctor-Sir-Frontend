import React from "react";
import { FaFacebook, FaInstagramSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full h-full flex flex-col items-center justify-end py-10 px-20 bg-black">
      <div className=" flex flex-col items-center">
        <p className=' text-lime-300 text-2xl font-bold font-["Inter"] italic cursor-pointer'>
          Gayan Madhusanka
        </p>
        <p className=" text-white my-5 text-lg">A/L Biology</p>
        <p className=" text-white">
          "MEDICINE ගිය කෙනෙක්ගෙන් හරිම පාර දැනගන්න..."
        </p>
      </div>
      <div className=" w-full h-px my-5 bg-white"></div>
      <div className="w-full flex justify-between items-end space-x-10">
        <div className=" h-full w-100 flex flex-col justify-end space-y-5">
          <p className=' text-lime-300 text-2xl font-bold font-["Inter"] italic cursor-pointer'>
            ඩොක්ටර් සර්ගේ Bio පන්තිය
          </p>
          <p className=" text-white text-lg ">
            උසස් පෙළ ජීව විද්‍යාව සඳහා නවීන ඉගැන්වීම් ක්‍රමවේදයන්, අංගසම්පූර්ණ
            නිබන්ධන සහ Online Learning Platform සමඟින් ඔබගේ සාර්ථකත්වය වෙනුවෙන්
            කැපවෙමු.
          </p>
        </div>
        <div className=" flex flex-col items-start space-y-2">
          <p className=" text-gray-300">Quick Links</p>
          <div className=" flex space-x-10">
            <div className=" flex flex-col items-start space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("classes")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                Classes
              </button>
            </div>
            <div className=" flex flex-col items-start space-y-2">
              <button
                onClick={() => scrollToSection("wten")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                W10
              </button>
              <button
                onClick={() => scrollToSection("institutes")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                Institutes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-bold hover:text-lime-400 cursor-pointer text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <p className=" text-gray-300">Classes</p>
          <p className=" text-white">Theory Class</p>
          <p className=" text-white">Revision Class</p>
          <p className=" text-white">Paper Class</p>
          <p className=" text-white">Reverse Class</p>
          <p className=" text-white">Online Learning Platform</p>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <Link to="/olp/login" target="blank"><button className=" bg-gray-300 px-8 py-1 rounded-full font-bold text-emerald-900 hover:bg-lime-400 hover:text-black cursor-pointer">Login</button></Link>
          <Link to="/olp/register" target="blank"><button className=" bg-gray-500 px-8 py-1 rounded-full text-lime-100 hover:bg-lime-400 hover:text-black font-bold cursor-pointer">Register</button></Link>
          <p className=" text-gray-300">Contact</p>
          <div className=" flex items-center space-x-5 text-white">
            <IoLogoWhatsapp/>
            <p>+94 76 123 4567</p>
          </div>
          <div className=" flex items-center space-x-5 text-white">
            <MdEmail/>
            <p>example@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 text-white">
            <FaLocationDot/>
            <p>Chemist ඇකඩමිය</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-px my-5 bg-white"></div>
      <div className=" w-full flex space-x-20 items-center justify-center text-white">
        <IoLogoWhatsapp/>
        <FaTelegramPlane/>
        <FaFacebook/>
        <FaYoutube/>
        <FaTiktok/>
        <FaInstagramSquare/>
      </div>
      <div className=" w-full h-px my-5 bg-white"></div>
      <p className=" text-white">
        © 2026 Gayan Madhusanka | All Rights Reserved. Designed & Developed by NeonSynth Systems
      </p>
    </div>
  );
};

export default Footer;
