import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineAppstoreAdd } from "react-icons/ai";
import categories from "./category"; // Import the categories list

const MainContent = () => {
  const [showCategories, setShowCategories] = useState(false);

  // Dummy data for videos
  const videoData = [
    {
      title: "React for Beginners",
      channelName: "Code Academy",
      views: "1.2k views",
      postedDate: "2 days ago",
      thumbnail: "Thumbnail.png",
      likes: 120,
      dislikes: 10,
      price: "$29.99",
    },
    {
      title: "Advanced JavaScript",
      channelName: "JS Mastery",
      views: "1.5k views",
      postedDate: "3 days ago",
      thumbnail: "Thumbnail.png",
      likes: 80,
      dislikes: 5,
      price: "$39.99",
    },
    {
      title: "Node.js Essentials",
      channelName: "WebDev Academy",
      views: "3.8k views",
      postedDate: "1 week ago",
      thumbnail: "Thumbnail.png",
      likes: 320,
      dislikes: 15,
      price: "$19.99",
    },
    {
      title: "CSS Flexbox",
      channelName: "CSS Wizards",
      views: "1k views",
      postedDate: "5 days ago",
      thumbnail: "Thumbnail.png",
      likes: 90,
      dislikes: 7,
      price: "$15.99",
    },
    // Add more video data...
  ];

  // Handle showing categories on button click
  const handleCategoryToggle = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="p-4">
      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={handleCategoryToggle}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4 flex items-center gap-2"
        >
          {showCategories ? "Hide Categories" : "Show Categories"}
          <AiOutlineArrowDown size={20} />
        </button>
      </div>

      {showCategories && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Video Listings (4 videos per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
          >
            {/* Thumbnail for videos */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            <p className="text-sm text-gray-500">{video.channelName}</p>
            <p className="text-xs text-gray-400">{video.views}</p>
            <p className="text-xs text-gray-400">{video.postedDate}</p>

            {/* Price and Like/Dislike */}
            <div className="flex items-center justify-between mt-4 space-x-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-700 hover:text-blue-500">
                  <AiOutlineAppstoreAdd size={20} className="mr-1" />
                  {video.likes}
                </button>
                <button className="flex items-center text-gray-700 hover:text-blue-500">
                  <AiOutlineAppstoreAdd size={20} className="mr-1" />
                  {video.dislikes}
                </button>
              </div>
              <p className="text-sm font-medium text-green-500">{video.price}</p>
            </div>

            {/* Enroll Button with Icon */}
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full mt-4 w-full flex items-center justify-center gap-2 text-lg hover:bg-blue-600 transition duration-300">
              <AiOutlineAppstoreAdd size={20} />
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
