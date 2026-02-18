import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold mb-6">
        AI Career Compass
      </h1>

      <p className="text-lg max-w-2xl mb-8">
        Analyze your resume, detect skill gaps, and generate personalized
        learning roadmaps powered by AI.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
