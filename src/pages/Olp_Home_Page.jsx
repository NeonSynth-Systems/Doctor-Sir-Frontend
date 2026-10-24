import React, { useEffect, useState } from "react";
import { PiVideoFill } from "react-icons/pi";
import { FaHeart, FaStar } from "react-icons/fa";
import Lesson_Card from "@/components/Lesson_Card";
import Premium_Card from "@/components/Premium_Card";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import API from "@/api/axios";

const Olp_Home_Page = () => {
  const { user, loading } = useAuth();
  const [lessons, setLessons] = useState([]);
  const [lessonLoading, setlessonLoading] = useState(true);
  const [lessonCounts, setLessonCounts] = useState({
    free: 0,
    premium: 0,
    total: 0,
  });
  const [type, setType] = useState("all");

  const filteredLessons =
    type === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.accessType === type);

  const navigate = useNavigate();

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await API.get("/lessons/student");

      setLessons(response.data.lessons);
      setLessonCounts(response.data.counts);
    } catch (error) {
      console.error("Failed to load lessons:", error);
    } finally {
      setlessonLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className=" w-full min-h-screen flex flex-col items-center px-10 py-20 md:p-20">
      <div className=" w-full items-start space-y-3 mt-5">
        <p className=" text-xl md:text-3xl font-bold text-white">{user.name}</p>
        <p className=" text-2xl md:text-4xl font-bold text-lime-400 font-serif">
          Welcome to Online Lerning Platform
        </p>
        <p className=" text-base md:text-lg text-gray-300">
          Watch free lessons, purchase premium lessons, and download study
          materials.
        </p>
        <div className=" w-full lg:w-200 mt-20 grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-10">
          <div className=" w-50 md:w-full rounded-lg bg-emerald-800 p-5">
            <PiVideoFill className=" text-4xl md:text-5xl mb-3 text-lime-500" />
            <p className=" text-lime-400 text-2xl font-bold">
              {lessonCounts.total}
            </p>
            <p className=" text-white">Total Lessons</p>
            <p className=" text-sm text-gray-400">Available Now</p>
          </div>
          <div className=" w-50 md:w-full rounded-lg bg-emerald-800 p-5">
            <FaHeart className=" text-4xl md:text-5xl mb-3 text-lime-500" />
            <p className=" text-lime-400 text-2xl font-bold">
              {lessonCounts.free}
            </p>
            <p className=" text-white">Free Lessons</p>
            <p className=" text-sm text-gray-400">No payment required</p>
          </div>
          <div className=" w-50 md:w-full rounded-lg bg-emerald-800 p-5">
            <FaStar className="text-4xl md:text-5xl mb-3 text-lime-500" />
            <p className=" text-lime-400 text-2xl font-bold">
              {lessonCounts.premium}
            </p>
            <p className=" text-white">Premium Lessons</p>
            <p className=" text-sm text-gray-400">Unlock anytime</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex space-x-3 md:space-x-5 mt-20">
        <div className="w-full flex space-x-3 md:space-x-5 mt-20">
          {["all", "free", "premium"].map((item) => (
            <div
              key={item}
              onClick={() => setType(item)}
              className={`px-5 py-2 rounded-full text-sm border font-bold cursor-pointer transition ${
                type === item
                  ? "bg-lime-600 border-lime-400 text-white"
                  : "bg-emerald-900 border-emerald-300/50 text-gray-400 hover:text-white hover:bg-lime-600"
              }`}
            >
              <p className="capitalize">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {lessonLoading ? (
          <div>Loading...</div>
        ) : filteredLessons.length === 0 ? (
          <div className="text-gray-400">
            No {type === "all" ? "" : type} lessons available.
          </div>
        ) : (
          filteredLessons.map((lesson) => (
            <div key={lesson._id}>
              {lesson.accessType === "free" ? (
                <Link to={`/olp/home/lesson/${lesson._id}`}>
                  <Lesson_Card lesson={lesson} />
                </Link>
              ) : (
                <Premium_Card lesson={lesson} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Olp_Home_Page;
