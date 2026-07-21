import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import FloatingBlobs from "../ui/FloatingBlobs";
import Button from "../ui/Button";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/ajit-wadikar-89642521b/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "mailto:ajitwadikar2050@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://github.com/AjitW-27", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/ajuuu_07___/", icon: FaInstagram, label: "Instagram" },
];

const STATS = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Built", value: "6+" },
  { label: "Core Stack", value: "MERN" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <FloatingBlobs variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 flex flex-col lg:flex-row items-center gap-14">
        <div className="flex-1 flex flex-col items-start animate-fade-up">
          <span className="pill mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)]">
            Hi, I'm <span className="text-gradient">Ajit Wadikar</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-secondary)] font-display">
            MERN Stack Developer
          </p>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I design and build scalable full-stack web applications — from
            pixel-perfect React interfaces to robust Node.js &amp; MongoDB
            backends — with a focus on clean architecture and real product
            value.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button to="/projects" variant="gradient">
              View Projects <span aria-hidden="true">→</span>
            </Button>
            <Button to="/contact" variant="glass">
              Let's Connect
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 w-full max-w-md">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card !rounded-xl px-3 py-4 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-gradient font-display">{s.value}</p>
                <p className="text-[0.65rem] sm:text-xs text-[var(--text-muted)] mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social rail */}
        <div className="flex lg:flex-col gap-4 order-first lg:order-last">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:-translate-y-1 hover:border-[var(--glass-border-hover)] transition-all duration-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        to="/projects"
        aria-label="Scroll to projects"
        className="hidden sm:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[var(--text-muted)] hover:text-white transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-5 h-9 rounded-full border border-[var(--glass-border)] flex items-start justify-center p-1.5">
          <span className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
        </span>
      </Link>
    </section>
  );
};

export default Hero;
