import React from "react";
import CellImg from "../assets/cellimg.webp";
import { lessonImages } from "./lessonImages";

const Lesson_Card = ({ lesson }) => {
  const selectedImage = lessonImages.find(
    (img) => img.name === lesson.imageUrl,
  );

  return (
    <div className=" w-full h-110 rounded-2xl relative overflow-hidden border border-emerald-700/50 drop-shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300 hover:border-lime-300/80 hover:shadow-lg hover:shadow-lime-200/50 cursor-pointer">
      <div className=" absolute z-10 p-5 w-full h-full bg-linear-to-t from-emerald-800 to-transparent flex flex-col justify-between">
        <div className=" w-full flex justify-end">
          <div className=" px-5 py-1 rounded-full border border-lime-300/50 backdrop-blur-sm">
            <p className=" text-lime-300 text-sm uppercase">{lesson.accessType}</p>
          </div>
        </div>
        <div className=" mb-10">
          <p className=" mt-42 text-white text-2xl" style={{ fontFamily: "FMGemunu" }}>
            {lesson.name}
          </p>
          <p className=" text-sm text-gray-400 pt-3 whitespace-nowrap overflow-hidden text-ellipsis">
            {lesson.description}
          </p>
          <button className=" w-full mt-10 bg-lime-400 h-10 rounded-lg font-bold text-emerald-900 cursor-pointer">
            Watch Lesson
          </button>
        </div>
      </div>
      <div className=" w-full h-50 overflow-hidden">
        <img
          src={selectedImage?.image}
          alt={selectedImage?.name}
          className=" w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Lesson_Card;
