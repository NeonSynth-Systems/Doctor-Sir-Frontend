import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import {  NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full fixed">
      <div className=" w-full flex text-emerald-200 bg-black/50 backdrop-blur-sm justify-between items-center px-5 lg:px-10 py-6 md:py-4">
        <button onClick={() => scrollToSection('home')}>
          <p className=' text-lime-300 text-base lg:text-2xl font-bold font-["Inter"] italic cursor-pointer'>
            Gayan Madhusanka
          </p>
        </button>
        <div className="hidden md:flex items-center space-x-8 lg:space-x-15">
          <button
            onClick={() => scrollToSection("home")}
            className="font-bold hover:text-lime-400 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-bold hover:text-lime-400 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("classes")}
            className="font-bold hover:text-lime-400 cursor-pointer"
          >
            Classes
          </button>
          <button
            onClick={() => scrollToSection("institutes")}
            className="font-bold hover:text-lime-400 cursor-pointer"
          >
            Institutes
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-bold hover:text-lime-400 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <div className=" hidden md:flex space-x-5 lg:space-x-10">
          <NavLink to="/olp/login" target="blank">
            <p className=" text-emerald-400 cursor-pointer">Login</p>
          </NavLink>
          <NavLink to="/olp/register" target="blank">
            <p className=" text-lime-400 cursor-pointer">Register</p>
          </NavLink>
        </div>
        <div onClick={() => setOpen(true)} className=" md:hidden">
          <MdMenu className=" text-2xl" />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute  md:hidden z-50 left-0 top-0 bg-emerald-950 backdrop-blur-sm w-full overflow-hidden"
            >
              <div
                className="flex justify-end p-4 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <MdClose className="text-emerald-200" size={20} />
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col items-center space-y-8 pb-10 text-emerald-200 font-semibold text-xl"
              >
                <motion.button
                  onClick={() => scrollToSection("home")}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="hover:text-green-500 cursor-pointer hover:underline"
                >
                  Home
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("about")}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="hover:text-green-500 cursor-pointer hover:underline"
                >
                  About
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("classes")}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="hover:text-green-500 cursor-pointer hover:underline"
                >
                  Classes
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("institutes")}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="hover:text-green-500 cursor-pointer hover:underline"
                >
                  Institutes
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="hover:text-green-500 cursor-pointer hover:underline"
                >
                  Contact
                </motion.button>
                <div className=" flex space-x-10">
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -20,
                      },

                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    className="hover:text-green-500 cursor-pointer hover:underline text-emerald-400"
                  >
                    <NavLink to="/olp/login" target="blank">
                      Login
                    </NavLink>
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -20,
                      },

                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    className="hover:text-green-500 cursor-pointer hover:underline text-lime-400"
                  >
                    <NavLink to="/olp/register" target="blank">
                      Register
                    </NavLink>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
