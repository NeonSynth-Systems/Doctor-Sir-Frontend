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
import { FaLock, FaMobileAlt, FaRegStar, FaUserGraduate } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaBook, FaLocationDot } from "react-icons/fa6";
import InputAdornment from "@mui/material/InputAdornment";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import API from "@/api/axios";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Register_Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    alYear: "",
    district: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        school: formData.school,
        alYear: formData.alYear,
        district: formData.district,
        password: formData.password,
      });

      console.log(response.data);

      setSuccess("Account created successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        school: "",
        alYear: "",
        district: "",
        password: "",
        confirmPassword: "",
      });

      // Go to login after a short delay
      setTimeout(() => {
        navigate("/olp/login");
      }, 1500);
    } catch (error) {
      console.error(error);

      if (error.response) {
        setError(error.response.data.message || "Registration failed");
      } else {
        setError("Unable to connect to server");
      }
    } finally {
      setLoading(false);
    }
  };

  const [year, setYear] = useState(new Date().getFullYear());
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

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
      className=" w-full min-h-screen bg-cover"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className=" w-full min-h-screen bg-emerald-950/80 flex flex-col items-center px-10 lg:px-15 py-10">
        <div className=" w-full h-full flex  flex-col lg:flex-row lg:space-x-10">
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-between">
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
              className=" text-2xl md:text-4xl font-bold font-['Maname'] h-12"
            />
            <p className=" font-bold text-4xl md:text-6xl text-white mt-5 md:mt-10 text-shadow-2xs text-shadow-black">
              Student
            </p>
            <p className=" font-bold text-4xl md:text-6xl text-lime-500 text-shadow-2xs text-shadow-black">
              Registration
            </p>
            <p className=" mt-5 text-sm md:text-base text-white md:w-80">
              අපගේ Student Learning Platform වෙත සම්බන්ධ වී නොමිලේ වීඩියෝ පාඩම්,
              නිබන්ධන සහ Premium පාඩම් වෙත ප්‍රවේශය ලබාගන්න.
            </p>
            <div className=" w-full h-full mt-5 md:mt-0">
              <img
                src={LaptopMockup}
                alt=""
                className=" w-full h-full object-contain"
              />
            </div>
            <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-20">
              <div className=" w-full bg-emerald-900 p-2 rounded-lg border border-lime-300 flex flex-col items-center">
                <MdOutlineSlowMotionVideo className=" text-3xl text-lime-400 mb-3" />
                <p className=" text-white font-bold text-lg">100+</p>
                <p className=" text-gray-300 text-xs">Video Lessons</p>
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
          <div className=" w-full lg:w-1/2 h-full mt-10 lg:mt-0">
            <form
              action=""
              onSubmit={handleRegister}
              className=" w-full h-full rounded-lg bg-linear-to-b from-emerald-950 to-emerald-900 border border-lime-400/30 shadow-2xl px-3 md:px-10 py-5"
            >
              <div className=" flex flex-col md:flex-row items-center justify-center mb-10">
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
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                required
                name="school"
                value={formData.school}
                onChange={handleChange}
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

              <div className="flex items-center space-x-5 mb-5">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-900 rounded-full p-2 border border-emerald-200/30">
                  <FaUserGraduate className="text-lg text-lime-400" />
                </div>

                {/* A/L Year Autocomplete */}
                <Autocomplete
                  disablePortal
                  options={years}
                  value={formData.alYear ? Number(formData.alYear) : null}
                  onChange={(event, newValue) => {
                    setFormData({
                      ...formData,
                      alYear: newValue ? String(newValue) : "",
                    });
                  }}
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
                        "& .MuiAutocomplete-option[aria-selected='true']": {
                          backgroundColor: "#065f46",
                        },
                      },
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="A/L Year"
                      required
                      name="alYear"
                    />
                  )}
                />
              </div>

              {/* <div className=" flex items-center space-x-5 mb-5">
                <div className=" w-10 h-10 flex items-center justify-center bg-emerald-900 rounded-full p-2 border border-emerald-200/30">
                  <FaUserGraduate className=" text-lg text-lime-400 " />
                </div>
                <Autocomplete
                  disablePortal
                  options={years}
                  value={formData.alYear}
                  onChange={(event, newValue) => {
                    setFormData({
                      ...formData,
                      alYear: newValue || "",
                    });
                  }}
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
                    <TextField
                      {...params}
                      placeholder="A/L Year"
                      required
                      name="alYear"
                    />
                  )}
                />
              </div> */}
              <div className=" flex items-center space-x-5 mb-5">
                <div className=" w-10 h-10 flex items-center justify-center bg-emerald-900 rounded-full p-2 border border-emerald-200/30">
                  <FaLocationDot className=" text-lg text-lime-400 " />
                </div>
                <Autocomplete
                  disablePortal
                  options={districts}
                  value={formData.district}
                  onChange={(event, newValue) => {
                    setFormData({
                      ...formData,
                      district: newValue || "",
                    });
                  }}
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
                    <TextField
                      {...params}
                      placeholder="District"
                      required
                      name="district"
                    />
                  )}
                />
              </div>
              <TextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
              {error && (
                <div className="mb-5 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-center text-red-300">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 rounded-xl border border-lime-400/40 bg-lime-400/10 px-4 py-3 text-center text-lime-300">
                  {success}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className=" w-full cursor-pointer bg-lime-600 py-5 rounded-lg text-white font-bold"
              >
                {loading ? "Creating Account..." : "Register Now"}
              </button>
              <div className=" w-full flex space-x-2 items-center my-5">
                <div className=" w-full bg-white h-px"></div>
                <p className=" text-white">Or</p>
                <div className=" w-full bg-white h-px"></div>
              </div>
              <div className=" flex space-x-3 justify-center">
                <p className="text-sm md:text-base text-white">
                  Already have an account?
                </p>
                <Link to="/olp/login">
                  <p className="text-sm md:text-base text-lime-400">Login</p>
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
