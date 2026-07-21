import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Reveal from "./Reveal";

/**
 * Generic code-style preview used when a project has no screenshot yet
 * (e.g. HRMS) — keeps the grid visually consistent without a placeholder image.
 */
const CodePreview = ({ accent, title }) => (
  <div
    className="w-full h-48 rounded-t-[1.25rem] flex flex-col justify-center px-6 relative overflow-hidden"
    style={{ background: `linear-gradient(135deg, ${accent}22, transparent 70%), #0c1024` }}
  >
    <div className="absolute top-4 left-5 flex gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
    </div>
    <FaCode size={40} style={{ color: accent }} className="opacity-80 mb-2" />
    <p className="font-mono text-xs" style={{ color: accent }}>
      {`<${title.split(" ")[0]} />`}
    </p>
  </div>
);

const ProjectCard = ({ project, delay = 0 }) => {
  const { title, tagline, description, tech, features, image, link, accent } = project;
  const isPlaceholder = !image;

  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass-card card-spotlight h-full flex flex-col overflow-hidden group">
        {isPlaceholder ? (
          <CodePreview accent={accent} title={title} />
        ) : (
          <div className="w-full h-48 overflow-hidden rounded-t-[1.25rem] relative">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a17] via-transparent to-transparent opacity-70" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">{title}</h3>
          <p className="text-xs font-mono mt-1" style={{ color: accent }}>
            {tagline}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed flex-1">
            {description}
          </p>

          {features && (
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-4">
              {features.map((f) => (
                <li key={f} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: accent }} />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span key={t} className="pill !py-1 !px-2.5 !text-[0.7rem]">
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target={link !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] group/link w-max"
          >
            <span className="relative">
              {link === "#" ? "Link coming soon" : "View Project"}
              <span
                className="absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                style={{ background: accent }}
              />
            </span>
            <FaExternalLinkAlt size={11} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
