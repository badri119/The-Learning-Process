import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const QuizHeader = () => {
  return (
    <div className="flex gap-5 items-center px-5 py-3 absolute top-0 w-full bg-black ">
      <Link to="/quiz" className="link-style">
        <div className="logo">
          <IoMdArrowRoundBack />
        </div>
      </Link>
      <Link
        to="/"
        className="text-4xl text-white hover:bg-white hover:text-black hover:rounded-md"
      >
        <FaHome />
      </Link>
    </div>
  );
};

export default QuizHeader;
