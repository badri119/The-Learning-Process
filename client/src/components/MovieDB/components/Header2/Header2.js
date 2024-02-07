import React from "react";
import "./Header2.scss";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const Header2 = () => {
  return (
    <div className="header2">
      <Link to="/movie-db" className="link-style">
        <div className="logo">
          <IoMdArrowRoundBack />
        </div>
      </Link>
      <Link to="/" className="link-style2">
        <p className="button-2">Home</p>
      </Link>
    </div>
  );
};

export default Header2;
