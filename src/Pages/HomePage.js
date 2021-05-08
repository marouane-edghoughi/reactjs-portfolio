import React from 'react';
import { useTitle } from '../Components/useTitle';
import ParticlesAnimation from '../Components/ParticlesAnimation';
import Content from '../Components/Content';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { HiOutlineDownload } from 'react-icons/hi';
import { SiTelegram } from 'react-icons/si';


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
                    {/*<Col sm={12} className="d-flex">
                        <p className="curly-braces px-3">{'{'}</p> {props.job_title && <p>{props.job_title}</p>} <p className="curly-braces px-3">{'}'}</p>
                    </Col>*/}
                    <Col sm={12} className="mt-5">
                        <button className="home-resume">
                            Resume
                            <HiOutlineDownload className="download" />
                        </button>
                        <Link to="/contact">
                            <button className="home-contact">
                                Contact
                                <SiTelegram className="contact-icon" />
                            </button>
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