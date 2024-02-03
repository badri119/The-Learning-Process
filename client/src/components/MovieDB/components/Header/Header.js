import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link-style">
        <div className="logo">
          <IoMdArrowRoundBack />
        </div>
      </Link>
    </div>
  );
};

export default Header;
