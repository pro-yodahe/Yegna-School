import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineUpload } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa"; // E-learning icon
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Simulated data (replace this with your real data source)
  const data = [
    {
      title: "React for Beginners",
      channelName: "Code Academy",
      description: "Learn React from scratch with simple and easy-to-follow examples.",
    },
    {
      title: "Advanced JavaScript",
      channelName: "JS Mastery",
      description: "Master advanced JavaScript concepts, including closures and async/await.",
    },
    {
      title: "Node.js Essentials",
      channelName: "WebDev Academy",
      description: "A comprehensive course on Node.js for backend development.",
    },
    {
      title: "CSS Flexbox",
      channelName: "CSS Wizards",
      description: "Understand CSS Flexbox and create responsive layouts effortlessly.",
    },
  ];

  // Handle search logic
  const handleSearch = (e) => {
    e.preventDefault();
    // Filter data based on search term (title, channel name, description)
    const results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center flex-wrap">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <FaChalkboardTeacher size={28} className="text-blue-600" />
        <div className="text-xl font-extrabold text-blue-600">
          Yegna<span className="text-yellow-400">School</span>
        </div>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex-grow max-w-3xl flex items-center bg-gray-100 rounded-full overflow-hidden shadow-sm px-4 mx-4"
      >
        <input
          type="text"
          placeholder="Search for courses, videos, or topics..."
          className="w-full py-2 text-gray-700 outline-none bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Upload Icon */}
        <button
          onClick={() => navigate("/upload")}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <AiOutlineUpload size={24} className="text-gray-600" />
        </button>

        {/* Profile Icon */}
        <div className="bg-gray-100 rounded-full p-2 cursor-pointer">
          <AiOutlineUser size={24} className="text-gray-600" />
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute bg-white shadow-lg w-full mt-12 p-4 rounded-md max-w-3xl mx-auto z-50">
          <h3 className="text-lg font-semibold mb-4">Search Results:</h3>
          <ul>
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                onClick={() => navigate(`/course/${result.title}`)} // Navigate to the course details page
              >
                <h4 className="font-medium text-gray-800">{result.title}</h4>
                <p className="text-sm text-gray-500">{result.channelName}</p>
                <p className="text-sm text-gray-400">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
