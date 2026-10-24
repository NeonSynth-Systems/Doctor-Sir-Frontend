import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaLock } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import API from "@/api/axios";

const ResetPassword_Page = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post(
        `/auth/reset-password/${token}`,
        {
          password,
        }
      );

      setMessage(
        response.data.message ||
          "Password reset successfully."
      );

      setTimeout(() => {
        navigate("/olp/login");
      }, 2500);

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Password reset failed. The link may have expired."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-emerald-900 border border-lime-400/30 rounded-2xl shadow-2xl p-6 md:p-10">

        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-lime-400 mb-4">
            <FaLock className="text-2xl text-lime-400" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Reset Password
          </h1>

          <p className="text-gray-300 mt-3 text-sm">
            Enter your new password below.
          </p>

        </div>

        <form onSubmit={handleResetPassword}>

          {/* New Password */}
          <TextField
            fullWidth
            label="New Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock className="text-lime-400" />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <IoMdEyeOff className="text-lime-400" />
                      ) : (
                        <IoMdEye className="text-lime-400" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
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
                },
              },

              "& .MuiInputBase-input": {
                color: "white",
              },

              "& .MuiInputLabel-root": {
                color: "#d1d5db",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#a3e635",
              },
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock className="text-lime-400" />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? (
                        <IoMdEyeOff className="text-lime-400" />
                      ) : (
                        <IoMdEye className="text-lime-400" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
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
                },
              },

              "& .MuiInputBase-input": {
                color: "white",
              },

              "& .MuiInputLabel-root": {
                color: "#d1d5db",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#a3e635",
              },
            }}
          />

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Success */}
          {message && (
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-400/10 px-4 py-3 text-center text-sm text-lime-300">
              {message}
            </div>
          )}

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              marginTop: "25px",
              padding: "14px",
              borderRadius: "12px",
              backgroundColor: "#65a30d",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#4d7c0f",
              },
            }}
          >
            {loading
              ? "Resetting..."
              : "Reset Password"}
          </Button>

        </form>

      </div>

    </div>
  );
};

export default ResetPassword_Page