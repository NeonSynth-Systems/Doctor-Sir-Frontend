import API from "@/api/axios";
import * as XLSX from "xlsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { FaDownload, FaFileExport } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const Admin_Student_Page = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [alYear, setAlYear] = useState("");
  const [district, setDistrict] = useState("");
  const [school, setSchool] = useState("");

  const [alYears, setAlYears] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [schools, setSchools] = useState([]);

  const fetchStudents = async () => {
    try {
      setLoading(true);

      const response = await API.get("/auth/users", {
        params: {
          role: "student",
          search: search.trim(),
          alYear,
          district,
          school,
        },
      });

      setStudents(response.data.users || []);
    } catch (error) {
      console.error("Failed to fetch students:", error);

      alert(error.response?.data?.message || "Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  const fetchFilterOptions = async () => {
    try {
      const response = await API.get("/auth/filter-options");

      setAlYears(response.data.years || []);
      setDistricts(response.data.districts || []);
      setSchools(response.data.schools || []);
    } catch (error) {
      console.error("Failed to fetch filter options:", error);
    }
  };

  const handleExportData = () => {
    if (students.length === 0) {
      alert("No student records to export.");
      return;
    }

    const exportData = students.map((student, index) => ({
      ID: index + 1,
      Name: student.name || "",
      Email: student.email || "",
      Phone: student.phone || "",
      School: student.school || "",
      District: student.district || "",
      "A/L Year": student.alYear || "",
      "Registered Date": student.createdAt
        ? new Date(student.createdAt).toLocaleDateString("en-GB")
        : "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(
      workbook,
      `students_${new Date().toISOString().split("T")[0]}.xlsx`,
    );
  };
  const handleExportPhoneNumbers = () => {
    if (students.length === 0) {
      alert("No student records to export.");
      return;
    }

    const phoneData = students
      .filter((student) => student.phone)
      .map((student) => ({
        "Phone Number": student.phone,
      }));

    if (phoneData.length === 0) {
      alert("No phone numbers available.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(phoneData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Phone Numbers");

    XLSX.writeFile(
      workbook,
      `student_phone_numbers_${new Date().toISOString().split("T")[0]}.xlsx`,
    );
  };

  const handleExportEmails = () => {
    if (students.length === 0) {
      alert("No student records to export.");
      return;
    }

    const emailData = students
      .filter((student) => student.email)
      .map((student) => ({
        Email: student.email,
      }));

    if (emailData.length === 0) {
      alert("No email addresses available.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(emailData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");

    XLSX.writeFile(
      workbook,
      `student_emails_${new Date().toISOString().split("T")[0]}.xlsx`,
    );
  };

  const handleDeleteStudent = async (student) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name || student.email}?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await API.delete(`/auth/users/${student._id}`);

      alert("Student deleted successfully.");

      // Remove from current table immediately
      setStudents((prevStudents) =>
        prevStudents.filter((item) => item._id !== student._id),
      );
    } catch (error) {
      console.error("Delete student error:", error);

      alert(error.response?.data?.message || "Failed to delete student.");
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchALYears();
    fetchFilterOptions();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchStudents();
    }, 400);

    return () => clearTimeout(timer);
  }, [search, alYear, district, school]);

  const fetchALYears = async () => {
    try {
      const response = await API.get("/auth/al-years");

      setAlYears(response.data.years || []);
    } catch (error) {
      console.error("Failed to fetch A/L years:", error);

      alert(error.response?.data?.message || "Failed to load A/L years");
    }
  };

  return (
    <div className=" w-full h-full py-10 px-5 md:px-10 flex flex-col items-center">
      <div className=" w-50 rounded-lg bg-emerald-100 p-5 flex flex-col items-center">
        <PiStudent className=" mb-3 text-3xl" />
        <p className=" text-emerald-950 font-bold">{students.length}</p>
        <p className=" text-emerald-950 font-bold">Students</p>
      </div>
      <input
        type="text"
        placeholder="Search name, email or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-120 px-5 py-2 text-white rounded-lg my-10 bg-emerald-900 outline-none border border-emerald-900 focus:border-emerald-600"
      />
      <div className="w-full flex flex-col md:flex-row justify-center my-5 gap-3">
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel sx={{ color: "#34e07e" }}>A/L Year</InputLabel>

          <Select
            value={alYear}
            onChange={(e) => setAlYear(e.target.value)}
            label="A/L Year"
            sx={{
              backgroundColor: "#065f46",
              color: "white",

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#34e07e",
              },

              "& .MuiSelect-icon": {
                color: "#34e07e",
              },
            }}
          >
            <MenuItem value="">All Years</MenuItem>

            {alYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel sx={{ color: "#34e07e" }}>District</InputLabel>

          <Select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            label="District"
            sx={{
              backgroundColor: "#065f46",
              color: "white",

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#34e07e",
              },

              "& .MuiSelect-icon": {
                color: "#34e07e",
              },
            }}
          >
            <MenuItem value="">All Districts</MenuItem>

            {districts.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 250 }}>
          <InputLabel sx={{ color: "#34e07e" }}>School</InputLabel>

          <Select
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            label="School"
            sx={{
              backgroundColor: "#065f46",
              color: "white",

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#10b981b3",
              },

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#34e07e",
              },

              "& .MuiSelect-icon": {
                color: "#34e07e",
              },
            }}
          >
            <MenuItem value="">All Schools</MenuItem>

            {schools.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Id
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Phone
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                School
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                District
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                A/L Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Loading students...
                </TableCell>
              </TableRow>
            ) : students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No students found.
                </TableCell>
              </TableRow>
            ) : (
              students.map((student, index) => (
                <TableRow
                  key={student._id}
                  onDoubleClick={() => handleDeleteStudent(student)}
                  sx={{
                    backgroundColor: "#D1FAE5",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#A7F3D0",
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>{student.email || "-"}</TableCell>

                  <TableCell>{student.name || "-"}</TableCell>

                  <TableCell>{student.phone || "-"}</TableCell>

                  <TableCell>{student.school || "-"}</TableCell>

                  <TableCell>{student.district || "-"}</TableCell>

                  <TableCell>{student.alYear || "-"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className=" w-full mt-10 flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-center">
        <button
          onClick={handleExportPhoneNumbers}
          className="bg-lime-200 px-10 py-3 rounded-lg font-bold cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <FaDownload />
            <p>Phone Numbers</p>
          </div>
        </button>
        <button
          onClick={handleExportEmails}
          className="bg-lime-200 px-10 py-3 rounded-lg font-bold cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <FaDownload />
            <p>Emails</p>
          </div>
        </button>
        <button
          onClick={handleExportData}
          className="bg-lime-200 px-10 py-3 rounded-lg font-bold cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <FaFileExport />
            <p>Export Data</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Admin_Student_Page;
