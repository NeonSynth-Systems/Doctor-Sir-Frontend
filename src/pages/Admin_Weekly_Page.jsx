import React, { useEffect, useMemo, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdCalendarMonth,
  MdDescription,
  MdClose,
  MdWork,
} from "react-icons/md";
import API from "@/api/axios";

const Admin_Weekly_Page = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const [editingWork, setEditingWork] = useState(null);

  const [weeklyWorks, setWeeklyWorks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const [formData, setFormData] = useState({
    week: "",
    weekStart: "",
    weekEnd: "",
    title: "",
    description: "",
  });

  const fetchWeeklyWorks = async () => {
    try {
      setLoading(true);

      const response = await API.get("/weekly-works");

      setWeeklyWorks(response.data.weeklyWorks || []);
    } catch (error) {
      console.error("Failed to fetch weekly works:", error);

      alert(error.response?.data?.message || "Failed to load weekly works.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeeklyWorks();
  }, []);

  // =========================
  // FORM HANDLERS
  // =========================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // OPEN ADD DIALOG
  // =========================

  const handleOpenAdd = () => {
    setEditingWork(null);

    setFormData({
      week: "",
      weekStart: "",
      weekEnd: "",
      title: "",
      description: "",
    });

    setOpenDialog(true);
  };

  // =========================
  // OPEN EDIT DIALOG
  // =========================

  const handleOpenEdit = (work) => {
    setEditingWork(work);

    setFormData({
      week: work.week || "",
      weekStart: work.weekStart ? work.weekStart.split("T")[0] : "",
      weekEnd: work.weekEnd ? work.weekEnd.split("T")[0] : "",
      title: work.title || "",
      description: work.description || "",
    });

    setOpenDialog(true);
  };

  // =========================
  // CLOSE DIALOG
  // =========================

  const handleCloseDialog = () => {
    if (saving) return;

    setOpenDialog(false);

    setEditingWork(null);

    setFormData({
      week: "",
      weekStart: "",
      weekEnd: "",
      title: "",
      description: "",
    });
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async () => {
    if (
      !formData.week ||
      !formData.weekStart ||
      !formData.weekEnd ||
      !formData.title.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (new Date(formData.weekEnd) < new Date(formData.weekStart)) {
      alert("Week end date cannot be before week start date.");

      return;
    }

    try {
      setSaving(true);

      // =========================
      // UPDATE
      // =========================

      if (editingWork) {
        const response = await API.put(
          `/weekly-works/${editingWork._id}`,
          formData,
        );

        setWeeklyWorks((prev) =>
          prev.map((work) =>
            work._id === editingWork._id ? response.data.weeklyWork : work,
          ),
        );

        alert("Weekly work updated successfully.");
      }

      // =========================
      // CREATE
      // =========================
      else {
        const response = await API.post("/weekly-works", formData);

        setWeeklyWorks((prev) => [response.data.weeklyWork, ...prev]);

        alert("Weekly work added successfully.");
      }

      handleCloseDialog();
    } catch (error) {
      console.error("Save weekly work error:", error);

      alert(error.response?.data?.message || "Failed to save weekly work.");
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // DELETE SINGLE WORK
  // =========================

  const handleDelete = async (work) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${work.title}"?`,
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await API.delete(`/weekly-works/${work._id}`);

      setWeeklyWorks((prev) => prev.filter((item) => item._id !== work._id));

      alert("Weekly work deleted successfully.");
    } catch (error) {
      console.error("Delete weekly work error:", error);

      alert(error.response?.data?.message || "Failed to delete weekly work.");
    } finally {
      setDeleting(false);
    }
  };

  // =========================
  // DELETE ENTIRE WEEK
  // =========================

  const handleDeleteWeek = async (week) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ALL works from ${week}?`,
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await API.delete(`/weekly-works/week/${encodeURIComponent(week)}`);

      setWeeklyWorks((prev) => prev.filter((work) => work.week !== week));

      alert(`${week} deleted successfully.`);
    } catch (error) {
      console.error("Delete week error:", error);

      alert(error.response?.data?.message || "Failed to delete week.");
    } finally {
      setDeleting(false);
    }
  };

  // =========================
  // GROUP WORKS BY WEEK
  // =========================

  const groupedWorks = useMemo(() => {
    return weeklyWorks.reduce((groups, work) => {
      if (!groups[work.week]) {
        groups[work.week] = [];
      }

      groups[work.week].push(work);

      return groups;
    }, {});
  }, [weeklyWorks]);

  // =========================
  // GET WEEKS
  // =========================

  const availableWeeks = Object.keys(groupedWorks);

  // =========================
  // CURRENT WEEK
  // =========================

  const currentWeek = useMemo(() => {
    const today = new Date();

    return weeklyWorks.find((work) => {
      if (!work.weekStart || !work.weekEnd) {
        return false;
      }

      const start = new Date(work.weekStart);

      const end = new Date(work.weekEnd);

      end.setHours(23, 59, 59, 999);

      return today >= start && today <= end;
    });
  }, [weeklyWorks]);

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================
  // UI
  // =========================

  return (
    <div className="w-full min-h-screen py-10 px-10 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Weekly Works</h1>

          <p className="text-gray-400 mt-1">
            Manage weekly assignments and activities
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition shadow-sm"
        >
          <MdAdd size={22} />
          Add Weekly Work
        </button>
      </div>

      {/* ========================= */}
      {/* SUMMARY CARDS */}
      {/* ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* TOTAL WEEKS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Weeks</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {availableWeeks.length}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <MdCalendarMonth size={25} className="text-emerald-600" />
            </div>
          </div>
        </div>

        {/* TOTAL WORKS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Works</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {weeklyWorks.length}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <MdWork size={25} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* CURRENT WEEK */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Week</p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">
                {currentWeek?.week || "No Active Week"}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <MdCalendarMonth size={25} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* LOADING */}
      {/* ========================= */}

      {loading && (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <div className="animate-spin w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full mx-auto mb-4"></div>

          <p className="text-gray-500">Loading weekly works...</p>
        </div>
      )}

      {/* ========================= */}
      {/* EMPTY */}
      {/* ========================= */}

      {!loading && weeklyWorks.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
            <MdWork size={32} className="text-emerald-600" />
          </div>

          <h2 className="text-xl font-bold text-gray-900">No Weekly Works</h2>

          <p className="text-gray-500 mt-2">
            Add your first weekly work to get started.
          </p>

          <button
            onClick={handleOpenAdd}
            className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            <MdAdd size={21} />
            Add Weekly Work
          </button>
        </div>
      )}

      {/* ========================= */}
      {/* WEEKLY WORKS */}
      {/* ========================= */}

      {!loading &&
        availableWeeks.map((week) => {
          const works = groupedWorks[week];

          const firstWork = works[0];

          const isCurrentWeek = currentWeek?.week === week;

          return (
            <div
              key={week}
              className={`bg-white rounded-2xl border shadow-sm mb-6 overflow-hidden ${
                isCurrentWeek ? "border-emerald-300" : "border-gray-100"
              }`}
            >
              {/* WEEK HEADER */}

              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-gray-900">
                        {week}
                      </h2>

                      {isCurrentWeek && (
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                          CURRENT
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-2">
                      <MdCalendarMonth size={18} />

                      <span>{formatDate(firstWork.weekStart)}</span>

                      <span>-</span>

                      <span>{formatDate(firstWork.weekEnd)}</span>

                      <span className="mx-1">•</span>

                      <span>
                        {works.length} {works.length === 1 ? "work" : "works"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteWeek(week)}
                    disabled={deleting}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition disabled:opacity-50"
                  >
                    <MdDelete size={20} />
                    Delete Entire Week
                  </button>
                </div>
              </div>

              {/* WORKS */}

              <div className="p-6 space-y-4">
                {works.map((work, index) => (
                  <div
                    key={work._id}
                    className="border border-gray-100 rounded-xl p-5 hover:border-emerald-200 transition"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex gap-4">
                        {/* NUMBER */}

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>

                        {/* CONTENT */}

                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {work.title}
                          </h3>

                          <p className="text-gray-600 mt-2 leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </div>

                      {/* ACTIONS */}

                      <div className="flex items-center gap-2 lg:shrink-0">
                        <button
                          onClick={() => handleOpenEdit(work)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        >
                          <MdEdit size={19} />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(work)}
                          disabled={deleting}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition disabled:opacity-50"
                        >
                          <MdDelete size={19} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      {/* ========================= */}
      {/* ADD / EDIT DIALOG */}
      {/* ========================= */}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {editingWork ? "Edit Weekly Work" : "Add Weekly Work"}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Add details for this weekly activity
              </p>
            </div>

            <button
              onClick={handleCloseDialog}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <MdClose size={24} />
            </button>
          </div>
        </DialogTitle>

        <DialogContent>
          <div className="pt-2 space-y-5">
            {/* WEEK */}

            <TextField
              fullWidth
              label="Week"
              name="week"
              value={formData.week}
              onChange={handleInputChange}
              className="h-20"
              placeholder="Example: 2026 - October - Week 1"
            />

            {/* WEEK START */}
            <p>Week Start Date</p>
            <TextField
              fullWidth
              type="date"
              name="weekStart"
              className="h-20"
              value={formData.weekStart}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* WEEK END */}
            <p>Week End Date</p>
            <TextField
              fullWidth
              type="date"
              name="weekEnd"
              className="h-20"
              value={formData.weekEnd}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* TITLE */}

            <TextField
              fullWidth
              label="Work Title"
              name="title"
              className="h-20"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Example: Complete Chapter 01 Questions"
            />

            {/* DESCRIPTION */}

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what students need to complete..."
            />
          </div>
        </DialogContent>

        <DialogActions className="px-6 pb-5">
          <button
            onClick={handleCloseDialog}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition disabled:opacity-50"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                {editingWork ? <MdEdit size={19} /> : <MdAdd size={19} />}

                {editingWork ? "Update Work" : "Add Work"}
              </>
            )}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Admin_Weekly_Page;
