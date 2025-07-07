import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer p-1 mt-1">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* © Text */}
        <p className="text-center md:text-left font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">Ajit Wadikar</span>. All rights reserved.
        </p>

        {/* Navigation Links */}
        <ul className="flex gap-10 justify-center">
          <li>
            <Link
              to="/about"
              className="hover:text-[#1788ae] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[#1788ae] transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#1788ae] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="btn btn-sm btn-outline"
          title="Back to Home"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
