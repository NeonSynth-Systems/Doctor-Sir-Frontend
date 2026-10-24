import React, { useEffect, useState } from "react";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdAdminPanelSettings,
  MdSave,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import API from "@/api/axios";

const Admin_Setings_Page = () => {
  // =========================
  // USER
  // =========================

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // EMAIL
  // =========================

  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

  const [showEmailPassword, setShowEmailPassword] =
    useState(false);

  // =========================
  // PASSWORD
  // =========================

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =========================
  // FETCH CURRENT USER
  // =========================

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);

      const response = await API.get("/auth/me");

      setUser(response.data.user);
    } catch (error) {
      console.error(
        "Failed to fetch current user:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to load administrator information."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // =========================
  // CHANGE EMAIL
  // =========================

  const handleChangeEmail = async (e) => {
    e.preventDefault();

    if (!newEmail.trim()) {
      alert("Please enter a new email address.");
      return;
    }

    if (!emailPassword) {
      alert("Please enter your current password.");
      return;
    }

    if (newEmail.trim().toLowerCase() === user?.email?.toLowerCase()) {
      alert("This is already your current email.");
      return;
    }

    try {
      setEmailLoading(true);

      const response = await API.put(
        "/auth/change-email",
        {
          newEmail: newEmail.trim(),
          currentPassword: emailPassword,
        }
      );

      alert(
        response.data?.message ||
          "Email changed successfully."
      );

      // Update displayed user information
      setUser((previousUser) => ({
        ...previousUser,
        email:
          response.data?.user?.email ||
          newEmail.trim().toLowerCase(),
      }));

      setNewEmail("");
      setEmailPassword("");
      setShowEmailPassword(false);
    } catch (error) {
      console.error(
        "Change email error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to change email."
      );
    } finally {
      setEmailLoading(false);
    }
  };

  // =========================
  // CHANGE PASSWORD
  // =========================

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      alert(
        "New password must be at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      alert(
        "New password and confirm password do not match."
      );
      return;
    }

    try {
      setPasswordLoading(true);

      const response = await API.put(
        "/auth/change-password",
        {
          currentPassword,
          newPassword,
        }
      );

      alert(
        response.data?.message ||
          "Password changed successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setShowCurrentPassword(false);
      setShowNewPassword(false);
      setShowConfirmPassword(false);
    } catch (error) {
      console.error(
        "Change password error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to change password."
      );
    } finally {
      setPasswordLoading(false);
    }
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="w-full min-h-screen pl-90 py-10 pr-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>

          <p className="text-gray-500">
            Loading settings...
          </p>
        </div>
      </div>
    );
  }

  // =========================
  // PAGE
  // =========================

  return (
    <div className="w-full min-h-screen py-10 px-10">
      <div className="max-w-4xl mx-auto">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Settings
          </h1>

          <p className="text-gray-300 mt-1">
            Manage your administrator account settings.
          </p>
        </div>

        {/* ========================= */}
        {/* ACCOUNT INFORMATION */}
        {/* ========================= */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
              <MdAdminPanelSettings
                size={24}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Administrator Account
              </h2>

              <p className="text-sm text-gray-500">
                Your current account information.
              </p>
            </div>

          </div>

          <div className="space-y-4">

            {/* NAME */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">

                <MdPerson
                  size={21}
                  className="text-gray-400"
                />

                <span className="text-gray-700">
                  {user?.name || "Not available"}
                </span>

              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Email
              </label>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">

                <MdEmail
                  size={21}
                  className="text-gray-400"
                />

                <span className="text-gray-700">
                  {user?.email || "Not available"}
                </span>

              </div>
            </div>

            {/* ROLE */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Role
              </label>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">

                <MdAdminPanelSettings
                  size={21}
                  className="text-gray-400"
                />

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold capitalize">
                  {user?.role || "admin"}
                </span>

              </div>
            </div>

          </div>
        </div>

        {/* ========================= */}
        {/* CHANGE EMAIL */}
        {/* ========================= */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
              <MdEmail
                size={24}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Change Email
              </h2>

              <p className="text-sm text-gray-500">
                Change the email address used for your admin account.
              </p>
            </div>

          </div>

          <form
            onSubmit={handleChangeEmail}
            className="space-y-5"
          >

            {/* CURRENT EMAIL */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Email
              </label>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">

                <MdEmail
                  size={20}
                  className="text-gray-400"
                />

                <span className="text-gray-700">
                  {user?.email}
                </span>

              </div>
            </div>

            {/* NEW EMAIL */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Email
              </label>

              <input
                type="email"
                value={newEmail}
                onChange={(e) =>
                  setNewEmail(e.target.value)
                }
                placeholder="Enter new email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* CURRENT PASSWORD */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>

              <div className="relative">

                <input
                  type={
                    showEmailPassword
                      ? "text"
                      : "password"
                  }
                  value={emailPassword}
                  onChange={(e) =>
                    setEmailPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter current password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowEmailPassword(
                      !showEmailPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showEmailPassword ? (
                    <MdVisibilityOff size={22} />
                  ) : (
                    <MdVisibility size={22} />
                  )}
                </button>

              </div>
            </div>

            {/* BUTTON */}

            <div className="flex justify-end">

              <button
                type="submit"
                disabled={emailLoading}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >

                <MdSave size={20} />

                {emailLoading
                  ? "Updating..."
                  : "Update Email"}

              </button>

            </div>

          </form>
        </div>

        {/* ========================= */}
        {/* CHANGE PASSWORD */}
        {/* ========================= */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
              <MdLock
                size={24}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Change Password
              </h2>

              <p className="text-sm text-gray-500">
                Update your administrator account password.
              </p>
            </div>

          </div>

          <form
            onSubmit={handleChangePassword}
            className="space-y-5"
          >

            {/* CURRENT PASSWORD */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>

              <div className="relative">

                <input
                  type={
                    showCurrentPassword
                      ? "text"
                      : "password"
                  }
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter current password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showCurrentPassword ? (
                    <MdVisibilityOff size={22} />
                  ) : (
                    <MdVisibility size={22} />
                  )}
                </button>

              </div>
            </div>

            {/* NEW PASSWORD */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>

              <div className="relative">

                <input
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(
                      !showNewPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showNewPassword ? (
                    <MdVisibilityOff size={22} />
                  ) : (
                    <MdVisibility size={22} />
                  )}
                </button>

              </div>
            </div>

            {/* CONFIRM PASSWORD */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>

              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <MdVisibilityOff size={22} />
                  ) : (
                    <MdVisibility size={22} />
                  )}
                </button>

              </div>
            </div>

            {/* REQUIREMENTS */}

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm font-medium text-gray-700 mb-2">
                Password requirements
              </p>

              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  • At least 8 characters
                </li>

                <li>
                  • Use a strong password
                </li>

                <li>
                  • Don't use easily guessable information
                </li>
              </ul>

            </div>

            {/* BUTTON */}

            <div className="flex justify-end">

              <button
                type="submit"
                disabled={passwordLoading}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >

                <MdSave size={20} />

                {passwordLoading
                  ? "Updating..."
                  : "Change Password"}

              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Admin_Setings_Page;