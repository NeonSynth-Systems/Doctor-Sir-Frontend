import React, { useEffect, useState } from "react";
import { PiVideoCameraLight, PiVideoFill } from "react-icons/pi";
import { FaBookOpen, FaHeart, FaStar } from "react-icons/fa";
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
          <div className="col-span-full flex justify-center py-10">
  <div className="w-full max-w-lg rounded-2xl border border-emerald-700/50 bg-emerald-950/50 p-8 md:p-12 text-center shadow-xl">

    {/* Icon */}
    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-800/70">
      <PiVideoCameraLight className="text-5xl text-lime-400" />
    </div>

    {/* Heading */}
    <h2 className="mb-3 text-xl md:text-2xl font-bold text-white">
      {type === "all"
        ? "පාඩම් තවමත් එකතු කර නොමැත!"
        : type === "free"
        ? "නොමිලේ පාඩම් දැනට නොමැත!"
        : "Premium පාඩම් දැනට නොමැත!"}
    </h2>

    {/* Description */}
    <p className="mb-6 text-sm md:text-base leading-7 text-gray-300">
      මේ වන විට ඔබට නැරඹිය හැකි පාඩම් කිසිවක් නොමැත.
      නව පාඩම් එකතු කළ විගස ඔබට මෙහිදී ඒවා නැරඹීමට හැකි වනු ඇත.
    </p>

    {/* Bottom message */}
    <div className="flex items-center justify-center gap-2 text-lime-400">
      <FaBookOpen />
      <span className="text-sm font-semibold">
        ඉගෙනීමේ ගමන දිගටම කරගෙන යමු!
      </span>
    </div>

    <p className="mt-5 text-xs text-gray-500">
      කරුණාකර පසුව නැවත පරීක්ෂා කරන්න.
    </p>

  </div>
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
