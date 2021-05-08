import React from 'react';
import Hero from '../Components/Hero/Hero';
import Carousel from '../Components/Card/Carousel';
import Footer from '../Components/Footer/Footer';
import Content from '../Components/Content';
import { useTitle } from '../Components/useTitle';

function ProjectsPage(props) {

    useTitle('Projects | Marouane Edghoughi')

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Projects will be available soon!</p>
                <Carousel />
            </Content>
            <Footer />
        </div>
    );
}

export default ProjectsPage;