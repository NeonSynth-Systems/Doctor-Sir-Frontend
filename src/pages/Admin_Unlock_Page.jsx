import React, { useEffect, useState } from "react";
import API from "@/api/axios";
import {
  MdPersonAdd,
  MdEmail,
  MdKey,
  MdCheckCircle,
  MdError,
  MdSchool,
  MdMenuBook,
  MdWhatsapp,
} from "react-icons/md";

const Admin_Unlock_Page = () => {
  const [email, setEmail] = useState("");
  const [lessonCode, setLessonCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [assignedData, setAssignedData] = useState(null);

  
  const [student, setStudent] = useState(null);

  

 

  const handleAssignLesson = async (e) => {
  e.preventDefault();

  setSuccessMessage("");
  setErrorMessage("");
  setAssignedData(null);

  if (!email.trim()) {
    setErrorMessage("Please enter the student's email.");
    return;
  }

  if (!lessonCode.trim()) {
    setErrorMessage("Please enter the lesson code.");
    return;
  }

  // Open a blank tab immediately to avoid popup blocking
  const whatsappWindow = window.open("", "_blank");

  try {
    setLoading(true);

    // ==========================================
    // 1. GET STUDENT BY EMAIL
    // ==========================================

    const userResponse = await API.get("/auth/user-by-email", {
      params: {
        email: email.trim(),
      },
    });

    console.log("USER RESPONSE:", userResponse.data);

    const student = userResponse.data.user;

    console.log("STUDENT:", student);
    console.log("STUDENT PHONE:", student?.phone);

    // ==========================================
    // CHECK PHONE
    // ==========================================

    if (!student?.phone) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setErrorMessage(
        "Student found, but no phone number is registered."
      );

      return;
    }

    // ==========================================
    // 2. GIVE LESSON ACCESS
    // ==========================================

    const response = await API.post("/lessons/give-access", {
      email: email.trim(),
      lessonCode: lessonCode.trim(),
    });

    console.log("LESSON ACCESS RESPONSE:", response.data);

    const lesson = response.data.lesson;

    // ==========================================
    // 3. FORMAT PHONE NUMBER
    // ==========================================

    let phone = student.phone.replace(/\D/g, "");

    // Sri Lankan number:
    // 0771234567
    //       ↓
    // 94771234567

    if (phone.startsWith("0")) {
      phone = "94" + phone.substring(1);
    }

    console.log("WHATSAPP PHONE:", phone);

    // ==========================================
    // 4. CREATE WHATSAPP MESSAGE
    // ==========================================

    const message = `Hello ${student.name},

Your access to the following lesson has been successfully activated.

🔑 Lesson Code: ${lesson.code}

You can now log in to Doctor Sir's Biology and access the lesson.

Thank you!`;

    const whatsappUrl =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    console.log("WHATSAPP URL:", whatsappUrl);

    // ==========================================
    // 5. OPEN WHATSAPP
    // ==========================================

    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, "_blank");
    }

    // ==========================================
    // 6. SUCCESS MESSAGE
    // ==========================================

    setSuccessMessage(
      response.data.message ||
        "Lesson access granted successfully."
    );

    setAssignedData({
      student: student,
      lesson: lesson,
      whatsappSent: true,
    });

    setEmail("");
    setLessonCode("");

  } catch (error) {
    console.error("Assign lesson error:", error);

    if (whatsappWindow) {
      whatsappWindow.close();
    }

    setErrorMessage(
      error.response?.data?.message ||
        error.message ||
        "Failed to assign lesson."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="w-full min-h-screen px-10 py-10">
      <div className="max-w-3xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
              <MdPersonAdd className="text-emerald-950 text-2xl" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">Assign Lesson</h1>

              <p className="text-emerald-200">
                Give a student access to a premium lesson
              </p>
            </div>
          </div>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleAssignLesson} className="flex flex-col gap-6">
            {/* ================= STUDENT EMAIL ================= */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-950">
                Student Email
              </label>

              <div className="relative">
                <MdEmail
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-emerald-700
                    text-xl
                  "
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                    setSuccessMessage("");
                  }}
                  placeholder="student@gmail.com"
                  className="
                    w-full
                    border
                    border-emerald-200
                    rounded-xl
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    focus:border-emerald-600
                    focus:ring-2
                    focus:ring-emerald-100
                    transition
                  "
                  disabled={loading}
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Enter the email address used by the student when registering.
              </p>
            </div>

            {/* ================= LESSON CODE ================= */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-950">
                Lesson Code
              </label>

              <div className="relative">
                <MdKey
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-emerald-700
                    text-xl
                  "
                />

                <input
                  type="text"
                  value={lessonCode}
                  onChange={(e) => {
                    setLessonCode(e.target.value.toUpperCase());
                    setErrorMessage("");
                    setSuccessMessage("");
                  }}
                  placeholder="BIO-CELL-001"
                  className="
                    w-full
                    border
                    border-emerald-200
                    rounded-xl
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    uppercase
                    focus:border-emerald-600
                    focus:ring-2
                    focus:ring-emerald-100
                    transition
                  "
                  disabled={loading}
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Enter the unique code of the premium lesson.
              </p>
            </div>

            {/* ================= ERROR ================= */}
            {errorMessage && (
              <div
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  bg-red-50
                  border
                  border-red-200
                  text-red-700
                "
              >
                <MdError className="text-xl shrink-0" />

                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            {/* ================= SUCCESS ================= */}
            {successMessage && (
              <div
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  bg-emerald-50
                  border
                  border-emerald-200
                  text-emerald-700
                "
              >
                <MdCheckCircle className="text-xl shrink-0" />

                <p className="text-sm font-medium">{successMessage}</p>
              </div>
            )}

            {/* ================= ASSIGN BUTTON ================= */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-emerald-700
                hover:bg-emerald-800
                disabled:bg-emerald-400
                text-white
                font-bold
                py-3.5
                rounded-xl
                transition
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <MdPersonAdd className="text-xl" />

              {loading ? "Assigning..." : "Assign Lesson"}
            </button>
          </form>
        </div>

        {/* ================= SUCCESS DETAILS ================= */}
        {assignedData && (
          <div
            className="
              mt-6
              bg-white
              rounded-2xl
              shadow-xl
              p-6
              border
              border-emerald-100
            "
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                "
              >
                <MdCheckCircle className="text-emerald-600 text-2xl" />
              </div>

              <div>
                <h2 className="font-bold text-emerald-950">
                  Lesson Assigned Successfully
                </h2>

                <p className="text-sm text-gray-500">
                  Access has been activated for this student.
                </p>
              </div>
            </div>

            {/* Student */}
            {assignedData.student && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MdSchool className="text-emerald-700" />

                  <p className="font-semibold text-emerald-950">Student</p>
                </div>

                <div
                  className="
                    bg-emerald-50
                    border
                    border-emerald-100
                    rounded-xl
                    p-4
                  "
                >
                  <p className="font-bold text-emerald-950">
                    {assignedData.student.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    {assignedData.student.email}
                  </p>
                </div>
              </div>
            )}

            {/* Lesson */}
            {assignedData.lesson && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MdMenuBook className="text-emerald-700" />

                  <p className="font-semibold text-emerald-950">Lesson</p>
                </div>

                <div
                  className="
                    bg-emerald-50
                    border
                    border-emerald-100
                    rounded-xl
                    p-4
                  "
                >
                  <p className="font-bold text-emerald-950">
                    {assignedData.lesson.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    Code: {assignedData.lesson.code}
                  </p>
                </div>
              </div>
            )}

            {/* WhatsApp Status */}
            <div
              className={`
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                ${
                  assignedData.whatsappSent
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-yellow-50 border border-yellow-200 text-yellow-700"
                }
              `}
            >
              <MdWhatsapp className="text-2xl shrink-0" />

              <div>
                <p className="font-semibold">
                  {assignedData.whatsappSent
                    ? "WhatsApp notification sent"
                    : "WhatsApp notification was not sent"}
                </p>

                <p className="text-xs mt-1">
                  {assignedData.whatsappSent
                    ? "The student has been notified about the lesson access."
                    : "The lesson was assigned successfully, but the WhatsApp notification failed."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= INFORMATION ================= */}
        <div
          className="
            mt-6
            bg-emerald-900
            rounded-2xl
            p-6
            text-emerald-100
          "
        >
          <h2 className="font-bold text-white mb-3">How it works</h2>

          <ol className="space-y-2 text-sm">
            <li>1. Enter the student's registered email.</li>

            <li>2. Enter the premium lesson code.</li>

            <li>3. Click "Assign Lesson".</li>

            <li>4. The student immediately gets access to the lesson.</li>

            <li>
              5. A WhatsApp notification is sent to the student's registered
              phone number.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Admin_Unlock_Page;
