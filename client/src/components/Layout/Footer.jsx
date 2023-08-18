import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer  mt-20 py-10 sticky-bottom">
      <h5 className="text-center text">All Right Reserved &copy; Abhi2359</h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
