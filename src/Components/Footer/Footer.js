import React from 'react';
import { Col, Container, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiTelegram } from 'react-icons/si';
import { AiFillGithub, AiFillLinkedin, AiFillHeart } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { GrReactjs } from 'react-icons/gr';

import './Footer.css';

function Footer() {

    return(
        <footer>
            <Container fluid={true}>
                    <Row className="floating-div justify-content m-auto">
                        <Col xs={12} md={8}>
                            <h3>Interested in collaboration?</h3>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to="/contact">
                                <button className="contact">
                                    Contact me
                                    <SiTelegram className="telegram" />
                                </button>
                            </Link>
                        </Col>
                    </Row>
                <Row className="justify-content-center m-3">
                    <Col xs="auto">
                        <a href="https://github.com/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id={`tooltip-github`}>
                                        Github
                                    </Tooltip>
                                }
                            >
                                <AiFillGithub className="social-media" />
                            </OverlayTrigger>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id={`tooltip-linkedin`}>
                                        Linkedin
                                    </Tooltip>
                                }
                            >
                            <AiFillLinkedin className="social-media" />
                            </OverlayTrigger>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id={`tooltip-email`}>
                                        Email
                                    </Tooltip>
                                }
                            >
                            <MdEmail className="social-media" />
                            </OverlayTrigger>
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content p-5">
                    <Col md={4} xs={12} className="p-0" >
                        {/** Copyright section that outputs the current year*/}
                        <p>&copy;{new Date().getFullYear()} Crafted with <AiFillHeart color="#FF4033" /> and <a href="https://reactjs.org/" className="link" target="_blank" rel="noopener noreferrer" ><GrReactjs /> React</a></p>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} xs={12} className="p-0">
                        <Link className="footer-copy link" to="/privacy-policy">Privacy Policy</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;