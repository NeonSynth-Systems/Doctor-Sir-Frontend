import API from "@/api/axios";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/motion-primitives/accordion";
import React, { useEffect, useState } from "react";
import { MdDownload, MdKeyboardArrowUp } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { lessonImages } from "@/components/lessonImages";
import IconButton from "@mui/material/IconButton";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Lesson_Details_Page = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getGoogleDriveDownloadUrl = (url) => {
  const match = url.match(/\/d\/([^/]+)/);

  if (!match) {
    return url;
  }

  const fileId = match[1];

  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

  const getLesson = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get(`/lessons/${id}`);

      setLesson(response.data.lesson);
    } catch (error) {
      console.error("Get lesson error:", error);

      if (error.response?.status === 403) {
        setError("You do not have access to this lesson.");
      } else if (error.response?.status === 404) {
        setError("Lesson not found.");
      } else {
        setError(error.response?.data?.message || "Failed to load lesson.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getLesson();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-950">
        <p className="text-lime-400 text-lg">Loading lesson...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-950 px-4">
        <p className="text-red-400 text-lg text-center">{error}</p>

        <button
          onClick={() => navigate("/olp/home")}
          className="mt-5 px-5 py-2 rounded-lg bg-lime-400 text-emerald-950 font-semibold"
        >
          Back to Lessons
        </button>
      </div>
    );
  }

  if (!lesson) {
    return null;
  }

  const selectedImage = lessonImages.find(
    (img) => img.name === lesson.imageUrl,
  );

  return (
    <div
      className=" w-full min-h-screen bg-emerald-200 flex flex-col items-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${selectedImage.image})`,
      }}
    >
      <div className=" w-full h-full bg-black/30 backdrop-blur-[3px] flex flex-col items-center p-20">
        <div onClick={() => navigate(-1)} className=" w-full pb-10">
          <IoChevronBackCircleSharp className=" text-white text-3xl cursor-pointer drop-shadow-lg drop-shadow-black" />
        </div>
        <div className=" w-150 h-full bg-white rounded-2xl overflow-hidden flex flex-col items-center drop-shadow-2xl drop-shadow-black">
          <div className=" w-full h-150 overflow-hidden">
            <img
              src={selectedImage.image}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <p style={{ fontFamily: "FMGemunu" }} className=" text-3xl mt-5 mx-5">
            {lesson.name}
          </p>
          <p className=" pt-5 pb-10 mx-5">{lesson.description}</p>
          <iframe
            src={lesson.videoUrl}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className=" mb-10 h-50 w-100 mx-5"
          ></iframe>
          {/* PDFs */}

          {lesson.pdfs && lesson.pdfs.length > 0 && (
            <div className="w-full px-8 pb-10">
              <p
                className="text-2xl font-bold mb-5 text-center"
              >
                PDF Notes
              </p>

              <div className="flex flex-col gap-3">
                {lesson.pdfs.map((pdf, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-between gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200"
                  >
                    {/* PDF NAME */}

                    <div className="min-w-0">
                      <p className=" text-emerald-950 truncate" style={{ fontFamily: "FMGemunu" }}>
                        {pdf.name}
                      </p>

                      <p className="text-xs text-gray-500">PDF {index + 1}</p>
                    </div>

                    {/* DOWNLOAD */}

                    <a
                      href={getGoogleDriveDownloadUrl(pdf.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-12 h-12 text-2xl bg-emerald-300 flex items-center justify-center rounded-lg cursor-pointer hover:text-white hover:bg-emerald-700 transition"
                      title={`Download ${pdf.name}`}
                    >
                      <MdDownload />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson_Details_Page;
