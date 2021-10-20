import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParticlesAnimation from '../ParticlesAnimation';
import { AiFillHeart } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useTitle } from '../useTitle';

import './NotFound.css';

function PageNotFound() {

    useTitle('Not Found | Marouane Edghoughi')

    return(
        <div className="space">
            <Container fluid={true}>
                <Row className="position-absolute justify-content-center text-center p-5">
                    <Col sm={12}>
                        <h1 className="hero-title">404 Page Not Found</h1>
                    </Col>
                    <Col sm={12} className="py-5">
                        <h3>The page you're looking for does not exist (&gt;_&lt;) </h3>
                    </Col>
                    <Col>
                        <Link to="/">
                            <button className="back-to-home">
                                Return to home page
                            </button>
                        </Link>
                    </Col>
                </Row>
                <Row className="fixed-bottom justify-content-center text-center">
                    <Col xs={8}>
                        {/** Copyright section that outputs the current year*/}
                        <p>&copy;{new Date().getFullYear()} made with <AiFillHeart color="#FF4033" /> and <a href="https://reactjs.org/" className="link" target="_blank" rel="noopener noreferrer" ><GrReactjs /> React</a></p>
                    </Col>
                </Row>
            </Container>
            <ParticlesAnimation />
        </div>
    );
}

export default PageNotFound;