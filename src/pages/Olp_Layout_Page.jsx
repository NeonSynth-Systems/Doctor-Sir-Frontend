import React, { useEffect } from "react";
import DbImg from "../assets/dbimg.webp";
import Olp_Navbar from "@/components/Olp_Navbar";
import Olp_Home_Page from "./Olp_Home_Page";

const Olp_Layout_Page = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className=" w-full min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: `url(${DbImg})` }}
    >
      <div className=" w-full min-h-screen bg-emerald-950/95 relative">
        <div className=" absolute z-50 w-full top-0 left-0">
            <Olp_Navbar/>
        </div>
        <Olp_Home_Page/>
      </div>
    </div>
  );
};

export default Olp_Layout_Page;
