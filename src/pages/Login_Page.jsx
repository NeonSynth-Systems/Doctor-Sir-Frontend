import React, { useState } from "react";
import LoginImg from "../assets/logining.webp";
import TextField from "@mui/material/TextField";
import {
  MdEmail,
  MdOutlinePersonOutline,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import ShinyText from "@/components/ShinyText";
import { FaLock, FaMobileAlt, FaRegFilePdf, FaRegStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import InputAdornment from "@mui/material/InputAdornment";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import API from "@/api/axios";
import { useAuth } from "@/context/AuthContext";

const Login_Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { getCurrentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const loggedInUser = await getCurrentUser();

      if (loggedInUser?.role === "admin") {
        navigate("/olp/admin");
      } else {
        navigate("/olp/home");
      }

      console.log("Login successful:", response.data);

      // JWT should be stored in an HTTP-only cookie by the backend.
      // No need to store the token in localStorage.

    } catch (error) {
      console.error(error);

      if (error.response) {
        setError(error.response.data.message || "Invalid email or password.");
      } else {
        setError("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      setForgotMessage("Please enter your email address.");
      return;
    }

    try {
      setForgotLoading(true);
      setForgotMessage("");

      const response = await API.post("/auth/forgot-password", {
        email: forgotEmail,
      });

      setForgotMessage(
        response.data.message ||
          "Password reset link has been sent to your email.",
      );

      // Close popup after 3 seconds
      setTimeout(() => {
        setOpen(false);
        setForgotEmail("");
        setForgotMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);

      setForgotMessage(
        error.response?.data?.message || "Unable to send password reset email.",
      );
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div
      className=" w-full min-h-screen bg-cover"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className=" w-full min-h-screen bg-emerald-950/80 flex flex-col items-center px-10 lg:px-15 py-10">
        <div className=" w-full h-full flex flex-col lg:flex-row lg:space-x-10">
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
              className="text-2xl md:text-4xl font-bold font-['Maname'] h-12"
            />
            <p className=" font-bold text-4xl md:text-6xl text-white mt-5 md:mt-10 text-shadow-2xs text-shadow-black">
              Student
            </p>
            <p className=" font-bold text-4xl md:text-6xl text-lime-500 text-shadow-2xs text-shadow-black">
              Learning Platform
            </p>
            <p className=" mt-5 text-sm md:text-base text-white md:w-80">
              නොමිලේ වීඩියෝ පාඩම්, නිබන්ධන සහ Premium පාඩම් වෙත ප්‍රවේශය
              ලබාගන්න.
            </p>
            <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 lg:mt-25">
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
          <div className="w-full lg:w-1/2 h-full mt-10 lg:mt-0">
            <form
              action=""
              onSubmit={handleLogin}
              className=" w-full h-full rounded-lg bg-linear-to-b from-emerald-950 to-emerald-900 border border-lime-400/30 shadow-2xl px-3 md:px-10 py-5"
            >
              <div className=" flex flex-col md:flex-row items-center justify-center mb-10">
                <div className=" w-12 h-12 flex items-center justify-center rounded-full border border-lime-600">
                  <MdOutlinePersonOutline className=" text-3xl text-lime-300" />
                </div>
                <p className=" font-bold text-3xl pl-5 text-white">
                  Student <span className=" text-lime-400">Login</span>
                </p>
              </div>
              <TextField
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
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
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
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
              <div className=" w-full flex justify-end mb-5">
                <button
                  type="button"
                  className=" text-lime-400 cursor-pointer text-sm md:text-base"
                  onClick={handleClickOpen}
                >
                  Forgot Password?
                </button>
                <Dialog
                  open={open}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: "#d1fae5",
                      },
                    },
                  }}
                >
                  <DialogTitle sx={{ color: "black", fontWeight: "bold" }}>
                    Send Password Reset Email
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText sx={{ color: "black" }}>
                      ඔබ ලියාපදිංචි වූ Email ලිපිනය ඇතුළත් කරන්න. මුරපදය නැවත
                      සැකසීම සඳහා අවශ්‍ය Link එක ඔබගේ Email ලිපිනයට එවනු ලැබේ.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="forgot-email"
                      name="forgotEmail"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                    {forgotMessage && (
                      <p className="mt-4 text-sm font-medium text-emerald-800">
                        {forgotMessage}
                      </p>
                    )}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} disabled={forgotLoading}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleForgotPassword}
                      disabled={forgotLoading}
                    >
                      {forgotLoading ? "Sending..." : "Send"}
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              {error && (
                <div className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className=" w-full bg-lime-600 py-5 rounded-lg text-white font-bold"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              <div className=" w-full flex space-x-2 items-center my-5">
                <div className=" w-full bg-white h-px"></div>
                <p className=" text-white">Or</p>
                <div className=" w-full bg-white h-px"></div>
              </div>
              <div className=" flex space-x-3 justify-center">
                <p className="text-sm md:text-base text-white">
                  Don't have an account?
                </p>
                <Link to="/olp/register">
                  <p className="text-sm md:text-base text-lime-400">
                    Create Account
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Page;
