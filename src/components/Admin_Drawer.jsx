import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdMenuBook,
  MdLockOpen,
  MdAssignment,
  MdSettings,
  MdSchool,
  MdClose,
} from "react-icons/md";

const Admin_Drawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      path: "/olp/admin",
      icon: MdDashboard,
      end: true,
    },
    {
      name: "Students",
      path: "/olp/admin/students",
      icon: MdPeople,
    },
    {
      name: "Lessons",
      path: "/olp/admin/lessons",
      icon: MdMenuBook,
    },
    {
      name: "Assign Lessons",
      path: "/olp/admin/unlock",
      icon: MdLockOpen,
    },
    {
      name: "Weekly Works",
      path: "/olp/admin/weekly",
      icon: MdAssignment,
    },
    {
      name: "Settings",
      path: "/olp/admin/settings",
      icon: MdSettings,
    },
  ];

  const closeMobileDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ========================================
          MOBILE TOP BAR
      ======================================== */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] h-16 bg-emerald-950 border-b border-emerald-800 flex items-center justify-between px-4">

        <p className='text-lime-300 text-lg font-bold font-["Inter"] italic'>
          Gayan Madhusanka
        </p>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center hover:bg-emerald-700 transition"
          aria-label="Open admin menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* ========================================
          MOBILE OVERLAY
      ======================================== */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
          onClick={closeMobileDrawer}
        />
      )}

      {/* ========================================
          SIDEBAR
      ======================================== */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-[80]
          h-screen
          w-72
          bg-emerald-200
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out

          lg:translate-x-0

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ========================================
            HEADER
        ======================================== */}
        <div className="h-20 px-5 flex items-center justify-between border-b border-emerald-300">

          <div>
            <p className='text-emerald-950 text-xl font-bold font-["Inter"] italic'>
              Gayan Madhusanka
            </p>

            <p className="text-xs text-emerald-700 mt-1">
              Admin Panel
            </p>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={closeMobileDrawer}
            className="lg:hidden w-9 h-9 rounded-lg bg-emerald-300 text-emerald-950 flex items-center justify-center hover:bg-emerald-400 transition"
            aria-label="Close admin menu"
          >
            <MdClose className="text-xl" />
          </button>

        </div>

        {/* ========================================
            NAVIGATION
        ======================================== */}
        <nav className="p-4 space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={closeMobileDrawer}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-emerald-700 text-white shadow-md"
                      : "text-emerald-950 hover:bg-emerald-300 hover:text-emerald-800"
                  }
                  `
                }
              >
                <Icon className="text-xl shrink-0" />

                <span>{item.name}</span>
              </NavLink>
            );
          })}

          {/* ========================================
              STUDENT MODE
          ======================================== */}
          <div className="pt-5 mt-4 border-t border-emerald-300">

            <NavLink
              to="/olp/home"
              onClick={closeMobileDrawer}
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                px-4
                py-3
                rounded-xl
                font-bold
                text-emerald-950
                bg-lime-400
                border
                border-lime-500
                hover:bg-lime-300
                hover:text-emerald-950
                transition-all
                duration-300
              "
            >
              <MdSchool className="text-xl" />

              <span>Student Mode</span>
            </NavLink>

          </div>

        </nav>

      </aside>
    </>
  );
};

export default Admin_Drawer;