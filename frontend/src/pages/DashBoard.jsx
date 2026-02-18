import { useEffect, useState } from "react";
import API from "../api/axios";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    const fetchAnalyses = async () => {
      const { data } = await API.get("/analysis");
      setAnalyses(data);
    };

    fetchAnalyses();
  }, []);

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Your Resume Analyses
      </h2>

      {analyses.length === 0 && (
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <p className="text-gray-500">
            No analyses yet. Upload your resume to get started 🚀
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {analyses.map((analysis) => (
          <div
            key={analysis._id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {analysis.jobTitle}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  analysis.matchPercentage >= 80
                    ? "bg-green-100 text-green-600"
                    : analysis.matchPercentage >= 50
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {analysis.matchPercentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-700"
                style={{ width: `${analysis.matchPercentage}%` }}
              ></div>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {analysis.matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}

              {analysis.missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Expandable Roadmap */}
            {analysis.roadmap.length > 0 && (
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium">
                  View Learning Roadmap
                </summary>

                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                  {analysis.roadmap.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
