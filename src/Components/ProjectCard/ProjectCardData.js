import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Row, Col, Button } from 'react-bootstrap';

import {
    ProjectTitle,
    Github,
    PreviewIcon
} from './ProjectCard.styled';


import './Card.css';

function ProjectCardData(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="p-card-info">
            <ProjectTitle>
                {props.title}
            </ProjectTitle>
            <p className="p-card-subtitle">{props.subtitle}</p>
            <Row className="p-card-links">
                <Col xs={6}>
                    <a href={props.glink} target="_blank" rel="noopener noreferrer">
                        <Button variant="light" block>
                            <Github />
                            View code
                        </Button>
                    </a>
                </Col>
                <Col xs={6}>
                    <a href={props.plink} target="_blank" rel="noopener noreferrer">
                        <Button variant="light" block>
                            <PreviewIcon />
                            Preview
                        </Button>
                    </a>
                </Col>
            </Row>
        </animated.div>
    );
}

export default ProjectCardData;