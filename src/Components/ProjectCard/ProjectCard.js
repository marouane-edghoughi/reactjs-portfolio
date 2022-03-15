import React, { useState } from 'react';

import { Col } from 'react-bootstrap';

import ProjectCardData from './ProjectCardData';
import {
    ProjectContainer,
    ProjectImage
} from './ProjectCard.styled';

import ReactJsPortfolio from '../../assets/images/portfolio-project.jpg';
import SlackClone from '../../assets/images/slack-clone.jpg';
import SpringDemo from '../../assets/images/springdemo.png';
import JavaDemo from '../../assets/images/javademo.png';

function ProjectCard() {

    const [cardData, setCardData] = useState([
        {
            title: 'ReactJS Portfolio',
            subtitle: 'Simple and beautiful looking software engineer portfolio built using React Js, Styled Components and Express Js.',
            imgSrc: ReactJsPortfolio,
            githubLink: 'https://github.com/marouane-edghoughi/reactjs-portfolio',
            previewLink: 'https://www.edghoughi.com/'
        },
        {
            title: 'Spring Boot Demo',
            subtitle: 'This is a demo of a Spring Boot app.',
            imgSrc: SpringDemo,
            githubLink: '#',
            previewLink: '#'
        },
        {
            title: 'Slack Clone',
            subtitle: 'Slack Clone (Chat Server) built with ReactJS, Redux, Styled Components and Firebase.',
            imgSrc: SlackClone,
            githubLink: 'https://github.com/marouane-edghoughi/slack-clone',
            previewLink: 'https://slack-clone-2022.web.app/'
        },
        {
            title: 'Java Demo',
            subtitle: 'This is a demo of a Java app.',
            imgSrc: JavaDemo,
            githubLink: '#',
            previewLink: '#'
        }
    ]);
    
    return(
        <>
            {cardData.map((project, index) => {
                return(
                    <Col md={6} sm={12} key={index} >
                        <ProjectContainer>
                            <ProjectCardData
                                title={project.title}
                                subtitle={project.subtitle}
                                glink={project.githubLink}
                                plink={project.previewLink}
                            />
                            <ProjectImage
                                src={project.imgSrc}
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