import React from 'react';
import {
    InternalLink,
    ExternalLink
} from '../../theme/globalStyles';

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
                    <p>Hi there! I'm Marouane Edghoughi, a Moroccan software engineer born and raised in <ExternalLink href='https://en.wikipedia.org/wiki/Casablanca' target="_blank" rel="noopener noreferrer">Casablanca</ExternalLink>. I graduated from the Higher School of Technology Casablanca with University Diploma in Technology in Software Engineering and Network Administration. My projects include backend development, RESTful API design and frontend development. I always focus on writing clean, elegant and efficient code.</p>
                    <p>In my spare time, I like to refine both my software engineering and communication skills.</p>
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