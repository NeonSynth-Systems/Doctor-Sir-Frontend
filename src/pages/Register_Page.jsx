import React, { useState } from "react";
import LoginImg from "../assets/logining.webp";
import LaptopMockup from "../assets/lapimg.webp";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  MdEmail,
  MdOutlinePersonOutline,
  MdOutlineSlowMotionVideo,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import ShinyText from "@/components/ShinyText";
import {
  FaLock,
  FaMobileAlt,
  FaRegFilePdf,
  FaRegStar,
  FaUserGraduate,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaBook, FaLocationDot } from "react-icons/fa6";
import InputAdornment from "@mui/material/InputAdornment";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Register_Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const years = ["2027 A/L", "2028 A/L"];
  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  return (
    <div
      className=" w-full h-full bg-cover"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/80 flex flex-col items-center px-20 py-10">
        <div className=" w-full h-full flex space-x-10">
          <div className=" w-1/2 h-full flex flex-col justify-between">
            <ShinyText
              text="ඩොක්ටර් සර්ගේ Bio පන්තිය"
              speed={2}
              delay={0}
              color=" #a3e635"
              shineColor="#d9f99d"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-4xl font-bold font-['Maname'] h-12"
            />
            <p className=" font-bold text-6xl text-white mt-10 text-shadow-2xs text-shadow-black">
              Student
            </p>
            <p className=" font-bold text-6xl text-lime-500 text-shadow-2xs text-shadow-black">
              Registration
            </p>
            <p className=" mt-5 text-white w-80">
              අපගේ Student Learning Platform වෙත සම්බන්ධ වී නොමිලේ වීඩියෝ පාඩම්,
              නිබන්ධන සහ Premium පාඩම් වෙත ප්‍රවේශය ලබාගන්න.
            </p>
            <div className=" w-full h-full">
              <img
                src={LaptopMockup}
                alt=""
                className=" w-full h-full object-contain scale-x-[-1]"
              />
            </div>
            <div className=" w-full grid grid-cols-5 gap-3 mt-20">
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <MdOutlineSlowMotionVideo className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">100+</p>
                <p className=" text-gray-300 text-xs">Video Lessons</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaRegFilePdf className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">PDF</p>
                <p className=" text-gray-300 text-xs">Notes</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaRegStar className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Premium</p>
                <p className=" text-gray-300 text-xs">Content</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FaMobileAlt className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Mobile</p>
                <p className=" text-gray-300 text-xs">Friendly</p>
              </div>
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <FiClock className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">Learn</p>
                <p className=" text-gray-300 text-xs">Anytime</p>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-full">
            <form
              action=""
              className=" w-full h-full rounded-lg bg-linear-to-b from-emerald-950 to-emerald-900 border border-lime-400/30 shadow-2xl px-10 py-5"
            >
              <div className=" flex items-center justify-center mb-10">
                <div className=" w-12 h-12 flex items-center justify-center rounded-full border border-lime-600">
                  <MdOutlinePersonOutline className=" text-3xl text-lime-300" />
                </div>
                <p className=" font-bold text-3xl pl-5 text-white">
                  Create <span className=" text-lime-400">Student</span> Account
                </p>
              </div>
              <TextField
                placeholder="Full Name"
                type="text"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPerson className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                placeholder="Email"
                required
                type="email"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEmail className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                placeholder="Phone Number"
                type="tel"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPhone className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                placeholder="School"
                type="text"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaBook className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <div className=" flex items-center space-x-5 mb-5">
                <div className=" w-10 h-10 flex items-center justify-center bg-emerald-900 rounded-full p-2 border border-emerald-200/30">
                  <FaUserGraduate className=" text-lg text-lime-400 " />
                </div>
                <Autocomplete
                  disablePortal
                  options={years}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      borderRadius: "12px",
                      backgroundColor: "#022c22",
                      "& fieldset": {
                        borderColor: "#047857",
                      },
                      "&:hover fieldset": {
                        borderColor: "#047857",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#84cc16",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#BDBDBD",
                      opacity: 0.9,
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#84cc16",
                    },
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: "#022c22",
                        color: "white",
                        "& .MuiAutocomplete-option": {
                          color: "white",
                        },

                        "& .MuiAutocomplete-option:hover": {
                          backgroundColor: "#064e3b",
                        },
                      },
                    },
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="A/L Year" />
                  )}
                />
              </div>
              <div className=" flex items-center space-x-5 mb-5">
                <div className=" w-10 h-10 flex items-center justify-center bg-emerald-900 rounded-full p-2 border border-emerald-200/30">
                  <FaLocationDot className=" text-lg text-lime-400 " />
                </div>
                <Autocomplete
                  disablePortal
                  options={districts}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      borderRadius: "12px",
                      backgroundColor: "#022c22",
                      "& fieldset": {
                        borderColor: "#047857",
                      },
                      "&:hover fieldset": {
                        borderColor: "#047857",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#84cc16",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#BDBDBD",
                      opacity: 0.9,
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#84cc16",
                    },
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: "#022c22",
                        color: "white",
                        "& .MuiAutocomplete-option": {
                          color: "white",
                        },

                        "& .MuiAutocomplete-option:hover": {
                          backgroundColor: "#064e3b",
                        },
                      },
                    },
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="District" />
                  )}
                />
              </div>
              <TextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <IoMdEyeOff className=" text-xl text-lime-400" />
                          ) : (
                            <IoMdEye className=" text-xl text-lime-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#022c22",
                    borderRadius: "14px",

                    "& fieldset": {
                      borderColor: "#047857",
                    },
                    "&:hover fieldset": {
                      borderColor: "#047857",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3e635",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#BDBDBD",
                    opacity: 0.9,
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock className=" text-xl text-lime-400 mr-2" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <IoMdEyeOff className=" text-xl text-lime-400" />
                          ) : (
                            <IoMdEye className=" text-xl text-lime-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <button className=" w-full bg-lime-600 py-5 rounded-lg text-white font-bold">
                Register Now
              </button>
              <div className=" w-full flex space-x-2 items-center my-5">
                <div className=" w-full bg-white h-px"></div>
                <p className=" text-white">Or</p>
                <div className=" w-full bg-white h-px"></div>
              </div>
              <div className=" flex space-x-3 justify-center">
                <p className=" text-white">Already have an account?</p>
                <Link to="/olp/login">
                  <p className=" text-lime-400">Login</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Page;
