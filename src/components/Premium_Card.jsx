import React, { useState } from "react";
import CellImg from "../assets/cellimg.webp";
import ComLogo from "../assets/comlogo.png";
import { FaLock, FaStar } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useAuth } from "@/context/AuthContext";
import { lessonImages } from "./lessonImages";
import { useNavigate } from "react-router-dom";

const Premium_Card = ({ lesson }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();

  const selectedImage = lessonImages.find(
      (img) => img.name === lesson.imageUrl,
    );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lesson.code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleWhatsAppPayment = () => {
    const message = `Hello, I have completed the payment.

Student Name: ${user.name}
Student Email: ${user.email}
A/L Year: ${user.alYear}
Lesson Code: ${lesson.code}
Amount: Rs. ${lesson.price}

I am sending the payment receipt here for verification.`;

    const whatsappUrl = `https://wa.me/94772010521?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleLessonClick = () => {
  if (lesson.hasAccess) {
    navigate(`/olp/home/lesson/${lesson._id}`);
  } else if (user?.role === "admin") {
    return;
  } else {
    handleClickOpen();
  }
};

  return (
    <>
      <div
        onClick={handleLessonClick}
        className=" w-full h-110 rounded-2xl relative overflow-hidden border border-emerald-700/50 drop-shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300 hover:border-lime-300/80 hover:shadow-lg hover:shadow-lime-200/50 cursor-pointer"
      >
        <div className=" absolute z-10 p-5 w-full h-full bg-linear-to-t from-emerald-800 to-transparent flex flex-col justify-between">
          <div className=" w-full flex justify-end">
            <div className=" px-5 py-1 rounded-full border border-amber-400/50 backdrop-blur-sm">
              <p className=" text-amber-400 text-sm uppercase">
                {lesson.accessType}
              </p>
            </div>
          </div>
          <div className=" mb-10">
            <p
              className=" mt-42 text-white text-2xl"
              style={{ fontFamily: "FMGemunu" }}
            >
              {lesson.name}
            </p>
            <p className=" text-sm text-gray-400 pt-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {lesson.description}
            </p>
            <button className=" w-full mt-10 bg-amber-400/20 backdrop-blur-sm border border-amber-400 h-10 rounded-lg font-bold text-amber-400 cursor-pointer">
              <div className=" flex space-x-2 w-full items-center justify-center">
                {lesson.hasAccess ? (
                  <p>Open Lesson</p>
                ) : (
                  <>
                    <FaLock className="text-sm" />
                    <p>Unlock Lesson - Rs.{lesson.price}</p>
                  </>
                )}
              </div>
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
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#065f46",
              width: "100%",
              borderRadius: "24px",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
          },
        }}
      >
        <div className=" flex flex-col items-center p-5 md:p-10">
          <FaStar className=" text-amber-600 text-4xl" />
          <p className=" text-amber-600 text-sm font-bold pt-3">
            PREMIUM LESSON
          </p>
          <p
            className=" text-white text-xl md:text-3xl text-center"
            style={{ fontFamily: "FMGemunu" }}
          >
            {lesson.name}
          </p>
          <p className=" text-2xl md:text-3xl font-bold text-emerald-300 pt-5">
            Rs.{lesson.price}
          </p>
          <div className=" w-full h-px bg-gray-400/50 my-5"></div>
          <p className=" text-sm text-gray-400 pb-10">
            Transfer the payment using the following method:
          </p>
          <div className=" w-full md:h-30 rounded-xl bg-emerald-900 border border-emerald-300/50 flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-center p-5">
            <img src={ComLogo} alt="" className=" w-40" />
            <div>
              <p className=" text-white font-bold">Commercial Bank</p>
              <p className=" text-sm text-gray-300">Accunt No : 8031980827</p>
              <p className=" text-sm text-gray-300">Name : W R A G Madhusankha</p>
              <p className=" text-sm text-gray-300">Branch : Wennappuwa</p>
            </div>
          </div>
          <div className=" w-full md:h-70 rounded-xl bg-emerald-900 border border-emerald-300/50 mt-5 p-5">
            <p className=" text-white">After completing the payment:</p>
            <ul className=" list-disc list-inside mt-3 text-gray-300">
              <li>Take a clear screenshot of the receipt.</li>
              <li>WhatsApp the receipt to the teacher.</li>
              <li>Mention your registered email address.</li>
              <li>
                Mention the{" "}
                <span className=" text-lime-300 font-semibold">
                  Lesson Code.
                </span>
              </li>
            </ul>
            <div className=" w-full mt-5 p-5 rounded-xl bg-emerald-600 border border-lime-300/50 flex justify-between items-center">
              <p className=" text-sm">Lesson Code</p>
              <p className=" font-bold text-xl text-lime-300">{lesson.code}</p>
            </div>
          </div>
          <div className="w-full flex space-x-2">
            <button
              onClick={handleCopy}
              className=" w-full h-15 mt-5 text-sm p-3 md:text-base rounded-lg bg-amber-600 border border-lime-300/50 cursor-pointer text-white font-bold"
            >
              {copied ? "Copied!" : "Copy Lesson Code"}
            </button>
            <button
              onClick={handleWhatsAppPayment}
              className=" w-full h-15 mt-5 text-sm p-3 md:text-base bg-emerald-600 rounded-lg border border-amber-400/50 cursor-pointer text-white font-bold"
            >
              WhatsApp Payment
            </button>
          </div>
          <button
            onClick={handleClose}
            className=" w-full h-15 mt-2 text-sm p-3 md:text-base bg-gray-400/80 rounded-lg border border-gray-300/50 cursor-pointer text-white font-bold"
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default Premium_Card;
