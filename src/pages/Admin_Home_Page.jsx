import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PiStudent } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import API from "@/api/axios";

const Admin_Home_Page = () => {
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    freeLessons: 0,
    premiumLessons: 0,
    studentsByDistrict: [],
    studentsBySchool: [],
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const response = await API.get("/auth/dashboard-stats");

      setDashboardData(response.data.stats);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const districtLabels = dashboardData.studentsByDistrict.map(
    (item) => item._id,
  );

  const districtStudentCounts = dashboardData.studentsByDistrict.map(
    (item) => item.students,
  );

  const schoolLabels = dashboardData.studentsBySchool.map((item) => item._id);

  const schoolStudentCounts = dashboardData.studentsBySchool.map(
    (item) => item.students,
  );

  return (
    <div className=" w-full h-full py-10 px-5 md:px-10 flex flex-col items-center">
      <div className=" w-60 md:w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className=" w-full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <PiStudent className=" mb-3 text-3xl" />
          <p className=" text-emerald-950 font-bold">
            {loading ? "..." : dashboardData.totalStudents}
          </p>
          <p className=" text-emerald-950 font-bold">Students</p>
        </div>
        <div className=" -full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <MdOutlineOndemandVideo className=" mb-3 text-3xl" />
          <p className=" text-emerald-950 font-bold">
            {" "}
            {loading ? "..." : dashboardData.freeLessons}
          </p>
          <p className=" text-emerald-950 font-bold">Free Lessons</p>
        </div>
        <div className=" w-full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <FaRegMoneyBillAlt className=" mb-3 text-3xl" />
          <p className=" text-emerald-950 font-bold">
            {loading ? "..." : dashboardData.premiumLessons}
          </p>
          <p className=" text-emerald-950 font-bold">Premium Lessons</p>
        </div>
      </div>
      <p className=" text-xl text-emerald-300 pb-5">Students & Districts</p>
      <div className=" w-full h-full bg-emerald-100">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: districtLabels,
              label: "District",
            },
          ]}
          yAxis={[
            {
              label: "Students",
            },
          ]}
          series={[
            {
              data: districtStudentCounts,
              label: "Number of Students",
            },
          ]}
          height={350}
        />
      </div>
      <p className=" text-xl text-emerald-300 pb-5 pt-20">Students & Schools</p>
      <div className=" w-full h-100 bg-emerald-100">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: schoolLabels,
              label: "School",
            },
          ]}
          yAxis={[
            {
              label: "Students",
            },
          ]}
          series={[
            {
              data: schoolStudentCounts,
              label: "Number of Students",
            },
          ]}
          height={350}
        />
      </div>
    </div>
  );
};

export default Admin_Home_Page;
