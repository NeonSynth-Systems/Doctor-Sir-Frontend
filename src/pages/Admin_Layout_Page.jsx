import Admin_Drawer from "@/components/Admin_Drawer";
import React from "react";
import { Outlet } from "react-router-dom";

const Admin_Layout_Page = () => {
  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Sidebar */}
      <Admin_Drawer />

      {/* Main Content */}
      <main
        className="
          min-h-screen
          pt-16
          lg:pt-0
          lg:pl-72
        "
      >
        <Outlet />
      </main>

    </div>
  );
};

export default Admin_Layout_Page;