import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import {
    ProjectDataWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    ProjectButton,
    Github,
    PreviewIcon
} from './ProjectCard.styled';

function ProjectCardData(props) {

    const [toggle, setToggle] = useState(false);

    const toggleStyles = () => {
        setToggle(!toggle);
    }

    const styles = useSpring({ opacity: toggle ? 1 : 0 });

    return(
        <ProjectDataWrapper
            style={styles}
            onMouseEnter={toggleStyles}
            onMouseLeave={toggleStyles}
        >
            <ProjectTitle>
                {props.title}
            </ProjectTitle>
            <ProjectDescription>
                {props.subtitle}
            </ProjectDescription>
            <ProjectLinks>
                <a href={props.glink} target="_blank" rel="noopener noreferrer">
                    <ProjectButton variant="light">
                        <Github />
                        View code
                    </ProjectButton>
                </a>
                <a href={props.plink} target="_blank" rel="noopener noreferrer">
                    <ProjectButton variant="light">
                        <PreviewIcon />
                        Preview
                    </ProjectButton>
                </a>
            </ProjectLinks>
        </ProjectDataWrapper>
    );
}

export default ProjectCardData;