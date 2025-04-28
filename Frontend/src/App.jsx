import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const App = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code || !language) {
      setError("Please provide both code and language.");
      return;
    }

    setLoading(true);
    setError("");
    setFeedback("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/code-review",
        { code, language }
      );
      setFeedback(response.data.feedback);
    } catch (err) {
      setError("Failed to get feedback from the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-50 to-purple-100"
      }`}
    >
      <div
        className={`w-full max-w-4xl m-4 p-8 rounded-2xl shadow-xl transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Code Review with Gemini
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <div className="mb-6">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-lg font-medium mb-2">
              Your Code
            </label>
            <textarea
              id="code"
              rows="10"
              className={`w-full p-4 font-mono text-sm rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-800"
              }`}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code here..."
            />
          </div>
          <div>
            <label
              htmlFor="language"
              className="block text-lg font-medium mb-2"
            >
              Programming Language
            </label>
            <select
              id="language"
              className={`w-full p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-800"
              }`}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Select Language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-1/2 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
                loading ? "cursor-wait" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"
                    />
                  </svg>
                  Analyzing...
                </>
              ) : (
                "Analyze Code"
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-100 text-red-700 flex items-center animate-fade-in">
            <FaExclamationCircle className="text-xl mr-3" />
            <span>{error}</span>
          </div>
        )}

        {feedback && (
          <div className="mt-6 p-6 rounded-lg bg-green-100 text-green-700 animate-fade-in">
            <div className="flex items-center">
              <FaCheckCircle className="text-xl mr-3" />
              <h2 className="text-xl font-semibold">Feedback</h2>
            </div>
            <pre className="mt-4 font-mono text-sm whitespace-pre-wrap">
              {feedback}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
