import React from "react";
import profileImage from "../assets/profile.jpg";

export default function UserProfile() {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md 
                    hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full object-cover w-24 h-24 md:w-36 md:h-36 
                     transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-500">
          John Doe
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center">
          Frontend Developer | Passionate about building clean and user-friendly
          web applications.
        </p>
      </div>
    </div>
  );
}
