import React from "react";
import HeroImg from "../assets/heroimg.png";
import { IoLogoWhatsapp, IoMdQuote } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Hero_Section = () => {
  return (
    <div className=" w-full h-full relative flex flex-col bg-black/50 items-center px-10 md:px-14 lg:px-10 ">
      <div className=" w-full h-full flex flex-col lg:flex-row justify-center items-center lg:items-start space-x-2 pt-14">
        {/* Left Side */}

        <div data-aos="fade-up"
          data-aos-duration="3000" className=" w-full md:w-150 h-full mt-10">
          <div className=" flex h-25 w-full space-x-5 items-center">
            <div className=" h-13 md:h-20 bg-lime-400 flex items-center justify-center px-5">
              <p className="text-3xl md:text-7xl " style={{ fontFamily: "FMGemunu" }}>
                fvdlag¾ i¾f.a
              </p>
            </div>
            <div className=" flex flex-col justify-end h-full md:mt-10">
              <p className=" text-lime-400 text-3xl md:text-6xl font-['Creepster']">BIO</p>
              <p
                className=" text-white text-xl md:text-3xl "
                style={{ fontFamily: "SARA-GUNE" }}
              >
                mka;sh
              </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <div className=" mt-3 md:mt-7">
              <p
                className=" text-emerald-400 text-9xl md:text-[200px] leading-16 md:leading-24"
                style={{ fontFamily: "FMGemunu" }}
              >
                .hdka
              </p>
              <p
                className="text-emerald-400 text-8xl md:text-[150px]"
                style={{ fontFamily: "FMGemunu" }}
              >
                uOqixL
              </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <p className=" text-white">MBBS | KELANIYA</p>
          </div>
          <div className=" w-full flex">
            <div className=" w-full">
              <div className=" w-full h-1 bg-white my-3"></div>
              <p className=" text-white text-xl">
                <span className=" font-bold text-base md:text-xl">
                  MEDICINE
                </span>{" "}
                <span
                  className=" text-lg md:text-2xl"
                  style={{ fontFamily: "FMGemunu" }}
                >
                  .sh flfklaf.ka yßu mdr oek.kak
                </span>
                .
              </p>
            </div>
            <IoMdQuote className=" text-3xl md:text-4xl text-emerald-400" />
          </div>
          <div className=" flex space-x-5 items-center mt-5 md:mt-10">
            <a href="https://t.me/DOCTOR_sir_BIOLOGY" target="_blank">
              <button className=" bg-emerald-800 px-5 md:px-10 py-2 md:py-3 rounded-full text-gray-200 hover:bg-lime-400 hover:text-black font-bold cursor-pointer">
                <div className=" flex items-center space-x-2">
                  <FaTelegramPlane />
                  <p>Channel</p>
                </div>
              </button>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb8QxK79Bb5peVBUrn1O" target="_blank">
              <button className=" bg-gray-300 text-emerald-800 px-5 md:px-10 py-2 md:py-3 rounded-full hover:bg-lime-400 hover:text-black font-bold cursor-pointer">
                <div className=" flex items-center space-x-2">
                  <IoLogoWhatsapp />
                  <p>Channel</p>
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* Right Side */}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full lg:w-1/2 h-full md:h-150 flex flex-col justify-end overflow-hidden mt-10 lg:mt-0"
        >
          <img src={HeroImg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
