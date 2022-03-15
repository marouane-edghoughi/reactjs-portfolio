import React from 'react';

import { Row } from 'react-bootstrap';

import { useTitle } from '../Components/useTitle';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import Footer from '../Components/Footer/Footer';

function ProjectsPage(props) {

    useTitle('Projects | Marouane Edghoughi')

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <Row className='justify-content-center'>
                    <ProjectCard />
                </Row>
            </Content>
            <Footer />
        </>
    );
}

export default ProjectsPage;