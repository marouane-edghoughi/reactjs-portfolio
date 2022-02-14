import React from 'react';
import { Link } from 'react-router-dom';
import { InternalLink } from '../../theme/globalStyles';

import { useTitle } from '../../Components/useTitle';
import Hero from '../../Components/Hero/Hero';
import Content from '../../Components/Content';
import {
    AboutMe,
    LineBreak,
    ViewResumeButton,
    EyeIcon
} from './AboutPage.styled';
import Footer from '../../Components/Footer/Footer';

function AboutPage(props) {

    useTitle('About | Marouane Edghoughi')

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <AboutMe>
                    <p>Hi there! I'm Marouane Edghoughi, a Moroccan software engineer and new graduate from the Higher School of Technology Casablanca. My projects include backend development, RESTful API design and frontend development. I always focus on writing clean, elegant and efficient code.</p>
                    <p>In my spare time, I like to practice my computer science skills and learn new things such as foreign languages.</p>
                    <p>I'm always down to hear about new projects, so feel free to <InternalLink to="/contact">drop me a line</InternalLink>.</p>
                    
                    <LineBreak />

                    <a 
                        href="https://drive.google.com/file/d/1Hjw79RcR58Ayw70F51Hl-Y4IupoCYglG/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ViewResumeButton>
                            Resume
                            <EyeIcon />
                        </ViewResumeButton>
                    </a>
                </AboutMe>
            </Content>
            <Footer/>
        </>
    );
}

export default AboutPage;