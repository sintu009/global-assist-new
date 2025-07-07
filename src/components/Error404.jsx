import React from "react";
import errorImage from "../assets/contact-image.png"; // Make sure this path is correct

const Error404 = () => {
  return (
    <div
      className="font-roboto flex flex-col md:flex-row items-center justify-center px-4 py-10 text-gray-800"
      style={{ background: "#F5F4F6" }}
    >
      {/* Left Side */}
      <div className="max-w-lg space-y-4 md:mr-10 text-center md:text-left">
        <span className="text-sm font-roboto bg-gray-100 px-3 py-1 rounded-full inline-block">
          ERROR 404
        </span>
        <h1 className="text-3xl md:text-5xl font-roboto leading-snug md:leading-tight">
          <span className="text-purple-600">Sorry</span> this page isn’t available
        </h1>
        <p className="text-gray-600 font-roboto leading-relaxed md:leading-loose">
          The page you were looking for couldn’t be found
        </p>
        <a
          href="/"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded transition"
        >
          Go back to the home page
        </a>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0">
        <img
          src={errorImage}
          alt="404 Visual"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Error404;
