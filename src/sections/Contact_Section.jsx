import React from "react";
import ContactImg from "../assets/bgimg2.webp";
import DegreeImg from "../assets/degree.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Contact_Section = () => {
  return (
    <div
      className=" w-full h-full bg-cover"
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/95 p-20 flex flex-col items-center">
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" text-white text-2xl font-semibold"
        >
          අප හා සම්බන්ධ වන්න
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" pt-10 text-emerald-200 text-2xl text-center"
        >
          පන්ති කාලසටහන්, ලියාපදිංචිය, Online Learning Platform සහ අනෙකුත්
          තොරතුරු සඳහා අප හා සම්බන්ධ වන්න.
        </p>
        <div className=" w-full flex space-x-10 justify-between mt-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" w-1/2 h-full"
          >
            <div className=" w-full grid grid-cols-2 gap-5">
              <div className=" w-full px-3 py-5 flex flex-col items-center rounded-lg border border-lime-200 bg-emerald-900">
                <div className=" w-12 h-12 rounded-full bg-lime-600 flex items-center justify-center">
                  <IoLogoWhatsapp className=" text-white text-3xl" />
                </div>
                <p className=" text-emerald-300 font-bold py-2">WhatsApp</p>
                <p className=" text-white text-lg font-bold py-2">
                  +94 76 123 4567
                </p>
                <p className=" text-gray-200  text-center">
                  ඉක්මන් පිළිතුරු සඳහා WhatsApp හරහා පණිවිඩයක් යොමු කරන්න.
                </p>
              </div>
              <div className=" w-full px-3 py-5 flex flex-col items-center rounded-lg border border-lime-200 bg-emerald-900">
                <div className=" w-12 h-12 rounded-full bg-lime-600 flex items-center justify-center">
                  <MdEmail className=" text-white text-3xl" />
                </div>
                <p className=" text-emerald-300 font-bold py-2">Email</p>
                <p className=" text-white text-lg font-bold py-2">
                  example@gmail.com
                </p>
                <p className=" text-gray-200 text-center">
                  විමසීම් සහ වෙනත් තොරතුරු සඳහා.
                </p>
              </div>
            </div>
            <div className=" w-full h-45 mt-10 p-5 bg-emerald-900 rounded-lg border border-lime-200 flex items-center">
              <div className=" w-15 h-15 rounded-full bg-lime-600 p-3 flex items-center justify-center">
                <IoLogoWhatsapp className=" text-white text-4xl" />
              </div>
              <div className=" h-full w-px bg-lime-200 mx-5"></div>
              <div className=" w-full">
                <p className=" text-white text-lg">
                  ඩොක්ටර් සර්ගේ WhatsApp channel එකට එකතු වෙන්න.
                </p>
                <button className=" px-10 py-3 bg-lime-500 text-lime-50 hover:bg-emerald-200 hover:text-black cursor-pointer font-bold rounded-lg mt-5">
                  එකතු වෙන්න
                </button>
              </div>
            </div>
            <div className=" w-full h-45 mt-10 p-5 bg-emerald-900 rounded-lg border border-lime-200 flex items-center">
              <div className=" w-15 h-15 rounded-full bg-lime-600 p-3 flex items-center justify-center">
                <RiTelegram2Fill className=" text-white text-4xl" />
              </div>
              <div className=" h-full w-px bg-lime-200 mx-5"></div>
              <div className=" w-full">
                <p className=" text-white text-lg">
                  ඩොක්ටර් සර්ගේ Telegram channel එකට එකතු වෙන්න.
                </p>
                <button className=" px-10 py-3 bg-lime-500 text-lime-50 hover:bg-emerald-200 hover:text-black cursor-pointer font-bold rounded-lg mt-5">
                  එකතු වෙන්න
                </button>
              </div>
            </div>
          </div>

          {/* Email Form */}

          <div data-aos="fade-up" data-aos-duration="3000" className=" w-1/2 ">
            <form
              action=""
              className=" w-full h-full space-y-10 p-10 rounded-lg bg-emerald-900 border border-lime-200"
            >
              <div className=" flex space-x-5 items-center">
                <MdEmail className=" text-emerald-300 text-lg" />
                <p className=" text-emerald-300 text-lg">
                  අපට පණිවිඩයක් යොමු කරන්න
                </p>
              </div>
              <div className=" space-y-5">
                <p className=" text-white">Full Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Shashika Dilshan"
                  className=" w-full bg-lime-100 rounded-sm px-5 py-2 outline-none focus:border border-lime-400"
                />
              </div>
              <div className=" space-y-5">
                <p className=" text-white">Email</p>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="shashika@gmail.com"
                  className=" w-full bg-lime-100 rounded-sm px-5 py-2 outline-none focus:border border-lime-400"
                />
              </div>
              <div className=" space-y-5">
                <p className=" text-white">Message</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Type your message here..."
                  rows={4}
                  className=" w-full bg-lime-100 rounded-sm px-5 py-2 outline-none focus:border border-lime-400"
                ></textarea>
              </div>
              <div className=" flex justify-end">
                <button className=" px-10 py-3 bg-lime-500 text-lime-50 hover:bg-emerald-200 hover:text-black cursor-pointer font-bold rounded-lg mt-5">
                  පණිවිඩය යවන්න
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full flex items-center justify-center space-x-20 mt-20"
        >
          <div className=" w-15 h-15 cursor-pointer rounded-full bg-lime-300 p-3 flex items-center justify-center">
            <FaFacebookF className=" text-blue-800 text-4xl" />
          </div>
          <div className=" w-15 h-15 cursor-pointer rounded-full bg-lime-300 p-3 flex items-center justify-center">
            <FaYoutube className=" text-red-600 text-4xl" />
          </div>
          <div className=" w-15 h-15 cursor-pointer rounded-full bg-lime-300 p-3 flex items-center justify-center">
            <FaTiktok className=" text-black text-4xl" />
          </div>
          <div className=" w-15 h-15 cursor-pointer rounded-full bg-lime-300 p-3 flex items-center justify-center">
            <FaInstagramSquare className=" text-pink-600 text-4xl" />
          </div>
        </div>

        {/* Redister Card */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" mt-20 w-full h-full px-5 py-10 rounded-lg border border-lime-200 bg-linear-to-r from-emerald-950 via-emerald-900 to-lime-900 flex items-center justify-between"
        >
          <div className=" w-50">
            <img
              src={DegreeImg}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" px-10">
            <p className=" text-white text-2xl font-bold mb-5">
              ඔබත් A/L Biology{" "}
              <span className=" text-lime-400">
                විශිෂ්ට ප්‍රතිඵලයක් සදහා සූදානම්ද?
              </span>
            </p>
            <p className=" text-white">
              අදම ලියාපදිංචි වී ඩොක්ටර් සර්ගේ Online Learing Platform සහ
              ගුණාත්මක පන්ති සමඟ ඔබේ ඉලක්කය කරා ගමන් ආරම්භ කරන්න.
            </p>
          </div>
          <button className="w-80 px-10 py-3 bg-lime-500 text-lime-50 hover:bg-emerald-200 hover:text-black cursor-pointer font-bold rounded-lg mt-5">
            ලියාපදිංචි වන්න
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact_Section;
