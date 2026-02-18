import { useState } from "react";
import API from "../api/axios";
import Layout from "../components/Layout";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState("MERN Developer");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobTitle", jobTitle);

    const { data } = await API.post("/resume/upload", formData);

    setResult(data.analysis);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Upload Resume</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-lg"
      >
        <select
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option>MERN Developer</option>
          <option>Backend Developer</option>
        </select>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Analyze Resume
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">
            Match: {result.matchPercentage}%
          </h3>
          <p className="text-sm">
            Missing: {result.missingSkills.join(", ") || "None"}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default UploadResume;
