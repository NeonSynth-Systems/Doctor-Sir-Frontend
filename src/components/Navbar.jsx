import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full flex fixed">
      <div className=" w-full flex text-emerald-200 bg-black/50 backdrop-blur-sm justify-between items-center px-10 py-4">
        <button>
          <p className=' text-lime-300 text-2xl font-bold font-["Inter"] italic cursor-pointer'>
            Gayan Madhusanka
          </p>
        </button>
        <div className=" flex items-center space-x-15">
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
        <div className=" flex space-x-10">
          <NavLink to="/olp/login" target="blank">
            <p className=" text-emerald-400 cursor-pointer">Login</p>
          </NavLink>
          <NavLink to="/olp/register" target="blank">
            <p className=" text-lime-400 cursor-pointer">Register</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
