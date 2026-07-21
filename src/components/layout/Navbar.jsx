import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Resume from "../../assets/Ajit Wadikar_Resume.pdf";
import nameLogoWhite from "../../assets/images/name-logo-white.svg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
      isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[var(--grad-primary,linear-gradient(135deg,#6366f1,#22d3ee))] after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`navbar fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-navbar" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
          <img src={nameLogoWhite} alt="Logo" className="w-9 h-9 sm:w-11 sm:h-11" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={Resume}
            download
            aria-label="Download Resume"
            className="btn-outline-glass !py-2 !px-4 text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg border border-[var(--glass-border)] glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-5 h-[2px] bg-white rounded transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out glass-navbar ${
          open ? "max-h-80 border-t border-[var(--glass-border)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "text-white bg-white/5" : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={Resume}
            download
            onClick={() => setOpen(false)}
            className="mt-2 btn-gradient justify-center !py-2.5 text-sm"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
