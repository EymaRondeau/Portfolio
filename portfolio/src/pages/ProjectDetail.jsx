import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; 
import ProjectInfo from '../components/ProjectInfo'; 
import ProjectChallenges from '../components/ProjectChallenges'; 
import Error404 from '../components/Error404'; // Importez votre composant Error404

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((proj) => proj.id === parseInt(id));

    if (!project) {
        return <Error404 />; // Affichez Error404 si le projet n'est pas trouvé
    }

    return (
        <div>
            <ProjectInfo project={project} />
            <ProjectChallenges challenges={project.challenges} skills={project.skills} />
        </div>
    );
};

export default ProjectDetail;