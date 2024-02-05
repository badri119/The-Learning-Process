import React from "react";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>Movie Database</div>
      <div>
        &copy; {year} Entertainment Database and an understanding of Redux{" "}
      </div>
    </div>
  );
};

export default Footer;
