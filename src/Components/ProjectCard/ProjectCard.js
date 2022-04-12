import React, { useEffect, useState } from 'react';

import useContentful from '../../hooks/useContentful';

import { Col } from 'react-bootstrap';

import ProjectCardData from './ProjectCardData';
import {
    ProjectContainer,
    ProjectImage
} from './ProjectCard.styled';

function ProjectCard() {

    const [projects, setProjects] = useState([])

    const { getProjects } = useContentful()

    const fetchProjects = () => {
        getProjects().then((response) => {
            setProjects(response)
        })
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    
    return(
        <>
            {projects?.map((project, index) => {
                return(
                    <Col md={6} sm={12} key={index} >
                        <ProjectContainer>
                            <ProjectCardData
                                title={project.title}
                                subtitle={project.description}
                                glink={project.githubLink}
                                plink={project.previewLink}
                            />
                            <ProjectImage
                                src={project.image}
                                alt={project.title}
                            />
                        </ProjectContainer>
                    </Col>
                );
            })}
        </>
    );
}

export default ProjectCard;