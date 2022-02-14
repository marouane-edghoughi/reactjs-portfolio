import React, { useState } from 'react';

import { Col } from 'react-bootstrap';

import ProjectCardData from './ProjectCardData';

import ReactJsPortfolio from '../../assets/images/portfolio-project.jpg';
import SpringDemo from '../../assets/images/springdemo.png';
import AngularDemo from '../../assets/images/angulardemo.jfif';
import JavaDemo from '../../assets/images/javademo.png';

import './Card.css';

function ProjectCard() {

    const [cardData, setCardData] = useState([
        {
            title: 'ReactJS Portfolio',
            subtitle: 'I built this portfolio using ReactJS, Formik, Styled Components.',
            imgSrc: ReactJsPortfolio,
            githubLink: 'https://github.com/marouane-edghoughi/reactjs-portfolio',
            previewLink: 'https://www.edghoughi.com/',
            selected: false,
        },
        {
            title: 'Spring Boot Demo',
            subtitle: 'This is a demo of a Spring Boot app.',
            imgSrc: SpringDemo,
            githubLink: '#',
            previewLink: '#',
            selected: false,
        },
        {
            title: 'Angular Demo',
            subtitle: 'This is a demo of an Angular app.',
            imgSrc: AngularDemo,
            githubLink: '#',
            previewLink: '#',
            selected: false,
        },
        {
            title: 'Java Demo',
            subtitle: 'This is a demo of a Java app.',
            imgSrc: JavaDemo,
            githubLink: '#',
            previewLink: '#',
            selected: false,
        }
    ]);
    
    return(
        <>
            {cardData.map((project, index) => {
                return(
                    <Col md={6} sm={12} key={index} >
                        <div
                            className="p-card"
                        >
                            <ProjectCardData
                                title={project.title}
                                subtitle={project.subtitle}
                                glink={project.githubLink}
                                plink={project.previewLink}
                            />
                            <div className="img-wrapper">
                                <img className="img-responsive" src={project.imgSrc} alt={project.title} />
                            </div>
                        </div>
                    </Col>
                );
            })}
        </>
    );
}

export default ProjectCard;