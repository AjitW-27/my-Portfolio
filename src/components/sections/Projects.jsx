import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import FloatingBlobs from "../ui/FloatingBlobs";
import projects from "../../data/projects";

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-5 overflow-hidden">
      <FloatingBlobs variant="section" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected work"
          title="Latest Projects"
          subtitle="A mix of production and personal projects — full-stack MERN applications built with a focus on scalability, clean UI and real-world functionality."
        />

        {featured && (
          <div className="mb-10">
            <ProjectCard project={featured} delay={1} />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 5) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
