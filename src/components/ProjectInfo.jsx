import React from 'react';
import '../styles/ProjectInfo.scss';

const ProjectInfo = ({ project }) => {
  return (
    <section className="project-info-section">
      <div className="project-info-container">
        <div className="project-detail-image">
          <img src={process.env.PUBLIC_URL + '/' + project['image-details']} alt={project.title} />
        </div>
        <div className="project-info">
          <h2 id="project-title">{project.title}</h2>
          <p className="project-objective">{project['project-objective']}</p>
          <p className="project-tech-title">{project['project-tech-title']}</p>
          <p className="project-tech">{project.technologies}</p>
          <div className="buttons">
            <a href={project.buttons.code} className="btn-code" target="_blank" rel="noopener noreferrer">Accéder au code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;