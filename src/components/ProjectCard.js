import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary"
            >
              GitHub Repo
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;