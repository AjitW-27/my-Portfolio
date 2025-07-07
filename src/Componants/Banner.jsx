import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0b1389] text-white overflow-hidden">
      <svg
        viewBox="0 0 406 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[350px] md:w-[500px] lg:w-[650px] opacity-50"
      >
        <path
          d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
          stroke="url(#paint0_linear)"
          strokeWidth="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="205.549"
            y1="20.0169"
            x2="204.338"
            y2="342.461"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1595B6" />
            <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="fixed top-3 left-3 sm:top-5 sm:left-5 z-10">
        <img src="/logo.svg" alt="Logo" className="w-8 sm:w-12" />
      </div>

      <div className="flex flex-col justify-center items-start min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
          Ajit Wadikar
        </h1>
        <p className="italic text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8">
          MERN Stack Developer
        </p>
        <Link
          to="/about"
          className="bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded hover:scale-105 transition group relative text-sm sm:text-base"
        >
          About Me
          <span className="absolute right-[-22px] sm:right-[-30px] top-1/2 -translate-y-1/2 transition group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          to="/projects"
          className="bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded hover:scale-105 transition group relative text-sm sm:text-base"
        >
          Projects
          <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 transition group-hover:translate-y-1 text-xl sm:text-2xl">
            ↓
          </div>
        </Link>
      </div>

      {/* Social Icons */}
      <ul className="flex flex-col gap-4 absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-gray-300 z-10">
        {[
          {
            href: "https://www.linkedin.com/in/ajit-wadikar-89642521b/",
            icon: "fab fa-linkedin-in",
          },

          { href: "mailto:ajitwadikar2050@gmail.com", icon: "fas fa-envelope" },
          { href: "https://github.com/Ajuu07", icon: "fab fa-github" },
          {
            href: "https://www.instagram.com/ajuuu_07___/",
            icon: "fab fa-instagram",
          },
        ].map((item, i) => (
          <li key={i}>
            <a href={item.href} target="_blank" rel="noreferrer">
              <i
                className={`${item.icon} text-lg sm:text-xl hover:text-white`}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
