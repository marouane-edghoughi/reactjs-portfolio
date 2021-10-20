import React from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineDownload } from 'react-icons/hi';

import { useTitle } from '../Components/useTitle';
import Content from '../Components/Content';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';

function AboutPage(props) {

    useTitle('About | Marouane Edghoughi')

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <div className="about-wrapper">
                    <p>Hi there! I'm Marouane Edghoughi, a Moroccan software engineer and new graduate from the Higher School of Technology Casablanca. My projects include backend development, RESTful API design and frontend development. I always focus on writing clean, elegant and efficient code.</p>
                    <p>In my spare time, I like to practice my computer science skills and learn new things such as foreign languages.</p>
                    <p>I'm always down to hear about new projects, so feel free to <Link className="link" to="/contact">drop me a line</Link>.</p>
                    <hr className="line-break" />
                    <button className="download-resume">
                        Resume
                        <HiOutlineDownload className="download-icon" />
                    </button>
                </div>
            </Content>
            <Footer/>
        </>
    );
}

export default AboutPage;