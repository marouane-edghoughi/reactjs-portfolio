import React from 'react';

import { Alert, Row } from 'react-bootstrap';

import { useTitle } from '../Components/useTitle';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import Footer from '../Components/Footer/Footer';

function ProjectsPage(props) {

    useTitle('Projects | Marouane Edghoughi')

    const ProjectsNotice = () => (
        <Alert variant="info">
            Projects will be available soon!
        </Alert>
    );

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <ProjectsNotice />
                <Row className='justify-content-center'>
                    <ProjectCard />
                </Row>
            </Content>
            <Footer />
        </>
    );
}

export default ProjectsPage;