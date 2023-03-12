import React from "react";
import ProjectTile from "./ProjectTile";

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="mdmax:px-6 ">
      <ul className="grid grid-flow-row gap-y-10 lg:grid-cols-3  lg:gap-x-10 mdmax:auto-rows-fr">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectTile {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsGrid;
