import React, { useEffect, useState } from "react";

import {
  MdOutlineOndemandVideo,
  MdSlowMotionVideo,
  MdPictureAsPdf,
  MdEdit,
  MdDelete,
  MdOpenInNew,
} from "react-icons/md";

import { FaRegMoneyBillAlt, FaTrash } from "react-icons/fa";

import Lesson_Card from "@/components/Lesson_Card";
import Premium_Card from "@/components/Premium_Card";

import { lessonImages } from "@/components/lessonImages";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";

import API from "@/api/axios";

const Admin_Lesson_Page = () => {
 

  const [openDialog, setOpenDialog] = useState(false);


  const [lessons, setLessons] = useState([]);

  const [lessonLoading, setLessonLoading] = useState(true);

  const [lessonCounts, setLessonCounts] = useState({
    total: 0,
    free: 0,
    premium: 0,
  });



  const [lessonData, setLessonData] = useState({
    lessonCode: "",
    title: "",
    description: "",
    videoUrl: "",
    image: "",
    price: "",
    premium: false,
    pdfs: [],
  });

  const [addingLesson, setAddingLesson] = useState(false);

  const [pdfName, setPdfName] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");


  const [selectedLesson, setSelectedLesson] = useState(null);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);


  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [updatingLesson, setUpdatingLesson] = useState(false);


  const [deletingLesson, setDeletingLesson] = useState(false);

  const fetchLessons = async () => {
    try {
      setLessonLoading(true);

      const response = await API.get("/lessons");

      const fetchedLessons = response.data.lessons || [];

      setLessons(fetchedLessons);

      setLessonCounts({
        total: fetchedLessons.length,

        free: fetchedLessons.filter((lesson) => lesson.accessType === "free")
          .length,

        premium: fetchedLessons.filter(
          (lesson) => lesson.accessType === "premium",
        ).length,
      });
    } catch (error) {
      console.error("Failed to load lessons:", error);

      alert(error.response?.data?.message || "Failed to load lessons.");
    } finally {
      setLessonLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setLessonData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePremiumChange = (e) => {
    const premium = e.target.checked;

    setLessonData((prev) => ({
      ...prev,
      premium,
      price: premium ? prev.price : "",
    }));
  };


  const handleImageSelect = (image) => {
    setLessonData((prev) => ({
      ...prev,
      image: image.name,
    }));
  };


  const handleOpenDialog = () => {
    setLessonData({
      lessonCode: "",
      title: "",
      description: "",
      videoUrl: "",
      image: "",
      price: "",
      premium: false,
      pdfs: [],
    });

    setPdfName("");
    setPdfUrl("");

    setOpenDialog(true);
  };

  // =========================================================
  // CLOSE ADD DIALOG
  // =========================================================

  const handleCloseDialog = () => {
    if (addingLesson) return;

    setOpenDialog(false);

    setPdfName("");
    setPdfUrl("");
  };

  // =========================================================
  // ADD PDF
  // =========================================================

  const handleAddPdf = () => {
    if (!pdfName.trim() || !pdfUrl.trim()) {
      alert("Please enter both PDF name and Google Drive URL.");

      return;
    }

    const newPdf = {
      name: pdfName.trim(),
      url: pdfUrl.trim(),
    };

    setLessonData((prev) => ({
      ...prev,
      pdfs: [...prev.pdfs, newPdf],
    }));

    setPdfName("");
    setPdfUrl("");
  };

  // =========================================================
  // REMOVE PDF
  // =========================================================

  const handleRemovePdf = (index) => {
    setLessonData((prev) => ({
      ...prev,

      pdfs: prev.pdfs.filter((_, pdfIndex) => pdfIndex !== index),
    }));
  };

  // =========================================================
  // ADD LESSON
  // =========================================================

  const handleAddLesson = async () => {
    try {
      setAddingLesson(true);

      const payload = {
        code: lessonData.lessonCode,
        name: lessonData.title,
        description: lessonData.description,
        videoUrl: lessonData.videoUrl,
        imageUrl: lessonData.image,

        accessType: lessonData.premium ? "premium" : "free",

        price: lessonData.premium ? Number(lessonData.price) : 0,

        published: true,

        pdfs: lessonData.pdfs,
      };

      const response = await API.post("/lessons", payload);

      console.log("Lesson created:", response.data);

      alert("Lesson added successfully!");

      setOpenDialog(false);

      setLessonData({
        lessonCode: "",
        title: "",
        description: "",
        videoUrl: "",
        image: "",
        price: "",
        premium: false,
        pdfs: [],
      });

      setPdfName("");
      setPdfUrl("");

      // Refresh lessons
      fetchLessons();
    } catch (error) {
      console.error("Add lesson error:", error);

      alert(error.response?.data?.message || "Failed to add lesson.");
    } finally {
      setAddingLesson(false);
    }
  };

  // =========================================================
  // OPEN LESSON DETAILS
  // =========================================================

  const handleOpenDetails = async (lesson) => {
    try {
      // Get complete lesson data including PDFs
      const response = await API.get(`/lessons/${lesson._id}`);

      setSelectedLesson(response.data.lesson);

      setOpenDetailsDialog(true);
    } catch (error) {
      console.error("Get lesson details error:", error);

      alert(error.response?.data?.message || "Failed to load lesson details.");
    }
  };

  // =========================================================
  // CLOSE DETAILS
  // =========================================================

  const handleCloseDetails = () => {
    setOpenDetailsDialog(false);
    setSelectedLesson(null);
  };

  // =========================================================
  // OPEN EDIT DIALOG
  // =========================================================

  const handleOpenEdit = (lesson) => {
    setLessonData({
      lessonCode: lesson.code || "",
      title: lesson.name || "",
      description: lesson.description || "",
      videoUrl: lesson.videoUrl || "",
      image: lesson.imageUrl || "",
      price: lesson.price || "",
      premium: lesson.accessType === "premium",
      pdfs: lesson.pdfs || [],
    });

    setPdfName("");
    setPdfUrl("");

    setOpenDetailsDialog(false);

    setOpenEditDialog(true);
  };

  // =========================================================
  // CLOSE EDIT DIALOG
  // =========================================================

  const handleCloseEdit = () => {
    if (updatingLesson) return;

    setOpenEditDialog(false);

    setPdfName("");
    setPdfUrl("");
  };

  // =========================================================
  // UPDATE LESSON
  // =========================================================

  const handleUpdateLesson = async () => {
    if (!selectedLesson) return;

    try {
      setUpdatingLesson(true);

      const payload = {
        code: lessonData.lessonCode,
        name: lessonData.title,
        description: lessonData.description,
        videoUrl: lessonData.videoUrl,
        imageUrl: lessonData.image,

        accessType: lessonData.premium ? "premium" : "free",

        price: lessonData.premium ? Number(lessonData.price) : 0,

        pdfs: lessonData.pdfs,

        published: true,
      };

      const response = await API.put(`/lessons/${selectedLesson._id}`, payload);

      console.log("Lesson updated:", response.data);

      alert("Lesson updated successfully!");

      setOpenEditDialog(false);

      setSelectedLesson(null);

      // Refresh lessons
      fetchLessons();
    } catch (error) {
      console.error("Update lesson error:", error);

      alert(error.response?.data?.message || "Failed to update lesson.");
    } finally {
      setUpdatingLesson(false);
    }
  };

  // =========================================================
  // DELETE LESSON
  // =========================================================

  const handleDeleteLesson = async () => {
    if (!selectedLesson) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${selectedLesson.name}"?`,
    );

    if (!confirmDelete) return;

    try {
      setDeletingLesson(true);

      await API.delete(`/lessons/${selectedLesson._id}`);

      alert("Lesson deleted successfully!");

      setOpenDetailsDialog(false);

      setSelectedLesson(null);

      // Refresh lessons
      fetchLessons();
    } catch (error) {
      console.error("Delete lesson error:", error);

      alert(error.response?.data?.message || "Failed to delete lesson.");
    } finally {
      setDeletingLesson(false);
    }
  };

  // =========================================================
  // GET IMAGE
  // =========================================================

  const getLessonImage = (imageName) => {
    return lessonImages.find((img) => img.name === imageName)?.image;
  };

  return (
    <div className="w-full h-full py-10 px-10 flex flex-col items-center">
      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <div className="w-full grid grid-cols-3 gap-8 mb-20">
        {/* TOTAL */}

        <div className="w-full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <MdOutlineOndemandVideo className="mb-3 text-3xl" />

          <p className="text-emerald-950 font-bold">{lessonCounts.total}</p>

          <p className="text-emerald-950 font-bold">Lessons</p>
        </div>

        {/* FREE */}

        <div className="w-full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <MdSlowMotionVideo className="mb-3 text-3xl" />

          <p className="text-emerald-950 font-bold">{lessonCounts.free}</p>

          <p className="text-emerald-950 font-bold">Free Lessons</p>
        </div>

        {/* PREMIUM */}

        <div className="w-full rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
          <FaRegMoneyBillAlt className="mb-3 text-3xl" />

          <p className="text-emerald-950 font-bold">{lessonCounts.premium}</p>

          <p className="text-emerald-950 font-bold">Premium Lessons</p>
        </div>
      </div>

      {/* =====================================================
          ADD LESSON
      ===================================================== */}

      <button
        onClick={handleOpenDialog}
        className="mb-10 bg-white px-5 py-3 rounded-xl font-bold drop-shadow-lg drop-shadow-black cursor-pointer"
      >
        Add Lesson
      </button>

      {/* =====================================================
          LESSONS
      ===================================================== */}

      {lessonLoading ? (
        <div className="py-20">
          <p className="text-white">Loading lessons...</p>
        </div>
      ) : lessons.length === 0 ? (
        <div className="py-20">
          <p className="text-white">No lessons found.</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-5">
          {lessons.map((lesson) => (
            <div
              key={lesson._id}
              onClick={() => handleOpenDetails(lesson)}
              className="cursor-pointer"
            >
              {lesson.accessType === "free" ? (
                <Lesson_Card lesson={lesson} />
              ) : (
                <Premium_Card lesson={lesson} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* =====================================================
          ADD LESSON DIALOG
      ===================================================== */}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="font-bold">Add New Lesson</DialogTitle>

        <DialogContent>
          <div className="flex flex-col gap-5 pt-3">
            {/* LESSON CODE */}

            <TextField
              label="Lesson Code"
              name="lessonCode"
              value={lessonData.lessonCode}
              onChange={handleChange}
              fullWidth
              required
              placeholder="e.g. BIO001"
            />

            {/* TITLE */}

            <TextField
              label="Lesson Title"
              name="title"
              value={lessonData.title}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* DESCRIPTION */}

            <TextField
              label="Lesson Description"
              name="description"
              value={lessonData.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />

            {/* VIDEO */}

            <TextField
              label="Video URL"
              name="videoUrl"
              value={lessonData.videoUrl}
              onChange={handleChange}
              fullWidth
              required
              placeholder="https://youtube.com/..."
            />

            {/* IMAGE */}

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Select Lesson Image
              </p>

              <div className="grid grid-cols-5 gap-3">
                {lessonImages.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleImageSelect(item)}
                    className={`
                      relative
                      rounded-lg
                      overflow-hidden
                      border-2
                      transition-all

                      ${
                        lessonData.image === item.name
                          ? "border-emerald-600 ring-2 ring-emerald-200"
                          : "border-gray-200 hover:border-emerald-400"
                      }
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-16 object-cover"
                    />

                    {lessonData.image === item.name && (
                      <div className="absolute inset-0 bg-emerald-900/30 flex items-center justify-center">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {lessonData.image && (
                <p className="text-xs text-gray-500 mt-2">
                  Selected: {lessonData.image}
                </p>
              )}
            </div>

            {/* PDF */}

            <PdfEditorSection
              pdfs={lessonData.pdfs}
              pdfName={pdfName}
              pdfUrl={pdfUrl}
              setPdfName={setPdfName}
              setPdfUrl={setPdfUrl}
              handleAddPdf={handleAddPdf}
              handleRemovePdf={handleRemovePdf}
            />

            {/* PREMIUM */}

            <FormControlLabel
              control={
                <Switch
                  checked={lessonData.premium}
                  onChange={handlePremiumChange}
                />
              }
              label="Premium Lesson"
            />

            {/* PRICE */}

            {lessonData.premium && (
              <TextField
                label="Lesson Price"
                name="price"
                type="number"
                value={lessonData.price}
                onChange={handleChange}
                fullWidth
                required
                slotProps={{
                  htmlInput: {
                    min: 0,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <span className="mr-2 text-gray-500">Rs.</span>
                  ),
                }}
              />
            )}
          </div>
        </DialogContent>

        <DialogActions className="px-6 pb-5">
          <Button
            onClick={handleCloseDialog}
            color="inherit"
            disabled={addingLesson}
          >
            Cancel
          </Button>

          <Button
            onClick={handleAddLesson}
            variant="contained"
            disabled={
              addingLesson ||
              !lessonData.lessonCode ||
              !lessonData.title ||
              !lessonData.description ||
              !lessonData.videoUrl ||
              !lessonData.image ||
              (lessonData.premium && !lessonData.price)
            }
            sx={{
              backgroundColor: "#047857",

              "&:hover": {
                backgroundColor: "#065f46",
              },
            }}
          >
            {addingLesson ? "Adding..." : "Add Lesson"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* =====================================================
          LESSON DETAILS DIALOG
      ===================================================== */}

      <Dialog
        open={openDetailsDialog}
        onClose={handleCloseDetails}
        fullWidth
        maxWidth="md"
      >
        {selectedLesson && (
          <>
            <DialogTitle className="font-bold flex justify-between items-center">
              <span>Lesson Details</span>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  selectedLesson.accessType === "premium"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {selectedLesson.accessType === "premium" ? "Premium" : "Free"}
              </span>
            </DialogTitle>

            <DialogContent>
              <div className="flex flex-col gap-6 pt-2">
                {/* IMAGE */}

                {getLessonImage(selectedLesson.imageUrl) && (
                  <img
                    src={getLessonImage(selectedLesson.imageUrl)}
                    alt={selectedLesson.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                )}

                {/* TITLE */}

                <div>
                  <p className="text-2xl font-bold text-emerald-950">
                    {selectedLesson.name}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Code: {selectedLesson.code}
                  </p>
                </div>

                <Divider />

                {/* DESCRIPTION */}

                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    Description
                  </p>

                  <p className="text-gray-600">{selectedLesson.description}</p>
                </div>

                {/* PRICE */}

                {selectedLesson.accessType === "premium" && (
                  <div>
                    <p className="font-semibold text-gray-800">Price</p>

                    <p className="text-emerald-700 font-bold text-xl">
                      Rs. {selectedLesson.price}
                    </p>
                  </div>
                )}

                {/* VIDEO */}

                <div>
                  <p className="font-semibold text-gray-800 mb-3">Video</p>

                  <iframe
                    src={selectedLesson.videoUrl}
                    title={selectedLesson.name}
                    className="w-full aspect-video rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* PDFs */}

                {selectedLesson.pdfs && selectedLesson.pdfs.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">PDFs</p>

                    <div className="flex flex-col gap-2">
                      {selectedLesson.pdfs.map((pdf, index) => (
                        <a
                          key={index}
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100"
                        >
                          <div className="flex items-center gap-3">
                            <MdPictureAsPdf className="text-red-500 text-2xl" />

                            <span className="font-medium">{pdf.name}</span>
                          </div>

                          <MdOpenInNew className="text-emerald-700" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>

            {/* ACTION BUTTONS */}

            <DialogActions className="px-6 pb-5">
              <Button onClick={handleCloseDetails} color="inherit">
                Close
              </Button>

              <Button
                onClick={() => handleOpenEdit(selectedLesson)}
                variant="contained"
                startIcon={<MdEdit />}
                sx={{
                  backgroundColor: "#047857",

                  "&:hover": {
                    backgroundColor: "#065f46",
                  },
                }}
              >
                Update
              </Button>

              <Button
                onClick={handleDeleteLesson}
                variant="contained"
                color="error"
                startIcon={<MdDelete />}
                disabled={deletingLesson}
              >
                {deletingLesson ? "Deleting..." : "Delete"}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* =====================================================
          EDIT LESSON DIALOG
      ===================================================== */}

      <Dialog
        open={openEditDialog}
        onClose={handleCloseEdit}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="font-bold">Update Lesson</DialogTitle>

        <DialogContent>
          <div className="flex flex-col gap-5 pt-3">
            {/* CODE */}

            <TextField
              label="Lesson Code"
              name="lessonCode"
              value={lessonData.lessonCode}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* TITLE */}

            <TextField
              label="Lesson Title"
              name="title"
              value={lessonData.title}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* DESCRIPTION */}

            <TextField
              label="Lesson Description"
              name="description"
              value={lessonData.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />

            {/* VIDEO */}

            <TextField
              label="Video URL"
              name="videoUrl"
              value={lessonData.videoUrl}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* IMAGE */}

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Select Lesson Image
              </p>

              <div className="grid grid-cols-5 gap-3">
                {lessonImages.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleImageSelect(item)}
                    className={`
                      relative
                      rounded-lg
                      overflow-hidden
                      border-2
                      transition-all

                      ${
                        lessonData.image === item.name
                          ? "border-emerald-600 ring-2 ring-emerald-200"
                          : "border-gray-200 hover:border-emerald-400"
                      }
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-16 object-cover"
                    />

                    {lessonData.image === item.name && (
                      <div className="absolute inset-0 bg-emerald-900/30 flex items-center justify-center">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* PDF */}

            <PdfEditorSection
              pdfs={lessonData.pdfs}
              pdfName={pdfName}
              pdfUrl={pdfUrl}
              setPdfName={setPdfName}
              setPdfUrl={setPdfUrl}
              handleAddPdf={handleAddPdf}
              handleRemovePdf={handleRemovePdf}
            />

            {/* PREMIUM */}

            <FormControlLabel
              control={
                <Switch
                  checked={lessonData.premium}
                  onChange={handlePremiumChange}
                />
              }
              label="Premium Lesson"
            />

            {/* PRICE */}

            {lessonData.premium && (
              <TextField
                label="Lesson Price"
                name="price"
                type="number"
                value={lessonData.price}
                onChange={handleChange}
                fullWidth
                required
                slotProps={{
                  htmlInput: {
                    min: 0,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <span className="mr-2 text-gray-500">Rs.</span>
                  ),
                }}
              />
            )}
          </div>
        </DialogContent>

        <DialogActions className="px-6 pb-5">
          <Button
            onClick={handleCloseEdit}
            color="inherit"
            disabled={updatingLesson}
          >
            Cancel
          </Button>

          <Button
            onClick={handleUpdateLesson}
            variant="contained"
            disabled={
              updatingLesson ||
              !lessonData.lessonCode ||
              !lessonData.title ||
              !lessonData.description ||
              !lessonData.videoUrl ||
              !lessonData.image ||
              (lessonData.premium && !lessonData.price)
            }
            sx={{
              backgroundColor: "#047857",

              "&:hover": {
                backgroundColor: "#065f46",
              },
            }}
          >
            {updatingLesson ? "Updating..." : "Update Lesson"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// =============================================================
// PDF EDITOR COMPONENT
// =============================================================

const PdfEditorSection = ({
  pdfs,
  pdfName,
  pdfUrl,
  setPdfName,
  setPdfUrl,
  handleAddPdf,
  handleRemovePdf,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <MdPictureAsPdf className="text-emerald-700 text-2xl" />

        <div>
          <p className="font-semibold text-gray-800">Lesson PDFs</p>

          <p className="text-xs text-gray-500">Add Google Drive PDF links</p>
        </div>
      </div>

      {/* PDF NAME */}

      <TextField
        label="PDF Name"
        value={pdfName}
        onChange={(e) => setPdfName(e.target.value)}
        fullWidth
        placeholder="e.g. Cell Biology Notes"
      />

      {/* PDF URL */}

      <TextField
        label="Google Drive PDF URL"
        value={pdfUrl}
        onChange={(e) => setPdfUrl(e.target.value)}
        fullWidth
        className="mt-4"
        placeholder="https://drive.google.com/file/d/..."
      />

      {/* ADD PDF */}

      <Button
        onClick={handleAddPdf}
        variant="outlined"
        fullWidth
        sx={{
          marginTop: "16px",
          borderColor: "#047857",
          color: "#047857",

          "&:hover": {
            borderColor: "#065f46",
            backgroundColor: "#ecfdf5",
          },
        }}
      >
        + Add PDF
      </Button>

      {/* PDF LIST */}

      {pdfs.length > 0 && (
        <div className="mt-5 flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-700">
            Added PDFs ({pdfs.length})
          </p>

          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <MdPictureAsPdf className="text-red-500 text-2xl shrink-0" />

                <div className="min-w-0">
                  <p className="font-medium text-gray-800 truncate">
                    {pdf.name}
                  </p>

                  <p className="text-xs text-gray-500 truncate">{pdf.url}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemovePdf(index)}
                className="text-red-500 hover:text-red-700 p-2 shrink-0 cursor-pointer"
                title="Remove PDF"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin_Lesson_Page;
