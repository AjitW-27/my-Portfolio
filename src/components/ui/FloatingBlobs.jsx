import React from "react";

/**
 * Ambient floating gradient blobs used behind hero/section content.
 * variant controls which color combo + density is used so different
 * sections don't feel visually identical.
 */
const VARIANTS = {
  hero: [
    { className: "blob-indigo w-[420px] h-[420px] -top-24 -left-24", delay: "0s" },
    { className: "blob-cyan w-[360px] h-[360px] top-1/3 -right-20", delay: "-4s" },
    { className: "blob-teal w-[300px] h-[300px] bottom-0 left-1/3", delay: "-8s" },
  ],
  section: [
    { className: "blob-indigo w-[300px] h-[300px] -top-10 -right-10", delay: "-2s" },
    { className: "blob-pink w-[260px] h-[260px] bottom-0 -left-10", delay: "-6s" },
  ],
};

const FloatingBlobs = ({ variant = "section" }) => {
  const blobs = VARIANTS[variant] || VARIANTS.section;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b, i) => (
        <span key={i} className={`blob ${b.className}`} style={{ animationDelay: b.delay }} />
      ))}
    </div>
  );
};

export default FloatingBlobs;
