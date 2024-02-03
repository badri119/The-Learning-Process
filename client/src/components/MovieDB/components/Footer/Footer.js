import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>Movie Database</div>
      <div>&copy; {year} Movie Database and an understanding of Redux </div>
    </div>
  );
};

export default Footer;
