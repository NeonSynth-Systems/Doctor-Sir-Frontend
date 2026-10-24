import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose, MdLogout } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Olp_Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/olp/login");
  };

  return (
    <div className=" w-full fixed h-16 bg-emerald-950 shadow-2xs shadow-gray-700 flex justify-between items-center text-white px-5 md:px-10 lg:px-20 py-3">
      <AnimatePresence mode="wait">
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 flex md:hidden items-center justify-center bg-black rounded-full cursor-pointer"
          >
            <img src={Logo} alt=" " className=" w-10 object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
      <p className=" hidden md:block text-lime-300 text-2xl font-bold font-['Inter'] italic cursor-pointer">
        Gayan Madhusanka
      </p>
      {/* <div className=" hidden md:flex items-center relative">
        <FaSearch className=" absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className=" w-80 lg:w-100 bg-emerald-900 rounded-full pl-10 pr-5 py-2 outline-none border border-emerald-900 focus:border-lime-700"
          placeholder="Search Biology Lessons..."
        />
      </div> */}
      {/* <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "calc(100% - 60px)", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden relative overflow-hidden"
          >
            <FaSearch className=" absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className=" w-full bg-emerald-900 rounded-full pl-10 pr-5 py-2 outline-none border border-emerald-700 focus:border-lime-700"
              placeholder="Search Biology Lessons..."
            />
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className=" flex items-center space-x-1 md:space-x-0">
        {/* <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900 border border-emerald-700"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <MdClose className="text-gray-300 text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="search"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <FaSearch className="text-gray-400 text-xs" />
              </motion.div>
            )}
          </AnimatePresence>
        </button> */}
        <div onClick={handleLogout} title="logout" className=" rounded-full w-10 h-10 flex items-center justify-center p-2 bg-emerald-900 cursor-pointer">
          <MdLogout />
        </div>
      </div>
    </div>
  );
};

export default Olp_Navbar;
