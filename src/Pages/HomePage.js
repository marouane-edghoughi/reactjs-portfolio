import React from 'react';
import { useTitle } from '../Components/useTitle';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import { AiFillHeart, AiOutlineEye } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { HiOutlineDownload } from 'react-icons/hi';

import Content from '../Components/Content';
import ParticlesAnimation from '../Components/ParticlesAnimation';


function HomePage(props) {

    useTitle('Marouane Edghoughi | Software Engineer')

    return(
        <div className="space">
            <Content>
                <Row className="position-absolute py-5">
                    <Col sm={12}>
                        {props.greetings && <p>{props.greetings}</p>}
                    </Col>
                    <Col sm={12}>
                        {props.title && <h1 className="hero-title">{props.title}</h1>}
                    </Col>
                    <Col sm={12} className="d-flex">
                        <p className="px-3">I'm a </p>
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Software engineer',
                                3000,
                                'Creative programmer',
                                3000,
                                'Java enthusiast',
                                3000
                            ]}
                        />
                    </Col>
                    <Col sm={12} className="mt-5">
                        <button className="download-resume">
                            Resume
                            <HiOutlineDownload className="download-icon" />
                        </button>
                        <Link to='/projects'>
                            <button className="see-projects">
                                See Projects
                                <AiOutlineEye className="eye-icon" />
                            </button>
                        </Link>
                        <Link to="/contact">
                            <p className="contact-me">
                                Contact me
                            </p>
                        </Link>
                    </Col>
                    <div className="text-center fixed-bottom">
                        <p>&copy;{new Date().getFullYear()} Crafted with <AiFillHeart color="#FF4033" /> and <a href="https://reactjs.org/" className="link" target="_blank" rel="noopener noreferrer" ><GrReactjs /> React</a></p>
                    </div>
                </Row>
            </Content>
            <ParticlesAnimation />
        </div>
    );
}

export default HomePage;