import API from "@/api/axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  MdAssignment,
  MdCalendarMonth,
  MdAccessTime,
  MdCheckCircle,
} from "react-icons/md";

const WeeklyWorksSection = () => {
  const [weeklyWorks, setWeeklyWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWeeklyWorks = async () => {
    try {
      setLoading(true);

      const response = await API.get("/weekly-works");

      setWeeklyWorks(response.data.weeklyWorks || []);
    } catch (error) {
      console.error(
        "Failed to fetch weekly works:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeeklyWorks();
  }, []);

  const currentWorks = useMemo(() => {
    const today = new Date();

    return weeklyWorks.filter((work) => {
      if (!work.weekStart || !work.weekEnd) {
        return false;
      }

      const start = new Date(work.weekStart);

      const end = new Date(work.weekEnd);

      end.setHours(23, 59, 59, 999);

      return today >= start && today <= end;
    });
  }, [weeklyWorks]);

  const currentWeek = currentWorks[0]?.week || "";

  const weekStart = currentWorks[0]?.weekStart;

  const weekEnd = currentWorks[0]?.weekEnd;


  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };


  if (loading) {
    return (
      <section className="w-full px-10 md:px-14 lg:px-10 py-10">
        <div className="w-full h-72 rounded-3xl bg-white/5 animate-pulse" />
      </section>
    );
  }


  if (currentWorks.length === 0) {
    return null;
  }

  return (
    <section  className="w-full px-10 md:px-14 lg:px-10 py-10 bg-black/50">


      <div className="flex flex-col items-center mb-20">

        <div className=" flex flex-col md:items-center">

          <div data-aos="fade-up"
        data-aos-duration="3000" className="flex items-center gap-2 mb-2">

            <MdAssignment
              size={24}
              className="text-emerald-400"
            />

            <span className="text-emerald-400 text-sm font-semibold">
              Weekly Works
            </span>

          </div>

          <p data-aos="fade-up"
        data-aos-duration="3000" className="text-white text-2xl md:text-3xl font-semibold md:text-center">
            මේ සතියේ වැඩපිළිවෙල
          </p>


        </div>
      </div>


      <div data-aos="fade-up"
        data-aos-duration="3000" className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 backdrop-blur-sm">

        {currentWorks.map((work, index) => (

          <div
            key={work._id}
            className="group relative min-h-60 rounded-2xl overflow-hidden bg-white/4 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 p-6"
          >

            {/* TOP GLOW */}

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition" />

            {/* NUMBER */}

            <div className="relative flex items-center justify-between mb-6">

              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">

                <span className="text-emerald-400 font-bold">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>

            </div>

            {/* TITLE */}

            <div className="relative">

              <h3 className="text-xl font-semibold text-white leading-snug group-hover:text-emerald-400 transition">

                {work.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-400 text-sm leading-6 mt-4">

                {work.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WeeklyWorksSection;