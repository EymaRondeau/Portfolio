import React from 'react';
import { useParams, Navigate } from 'react-router-dom'; // Import de Navigate
import projectsData from '../data/projects.json'; 
import ProjectInfo from '../components/ProjectInfo'; 
import ProjectChallenges from '../components/ProjectChallenges'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  // Si le projet n'est pas trouvé, redirige vers la page 404
  if (!project) {
    return <Navigate to="*" />;
  }

  return (
    <div>
      <ProjectInfo project={project} />
      <ProjectChallenges challenges={project.challenges} skills={project.skills} />
    </div>
  );
};

export default ProjectDetail;