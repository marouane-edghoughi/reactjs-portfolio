import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import { useTitle } from '../useTitle';
import { HeroTitle } from '../Hero/Hero.styled';
import {
    Home,
    BackHome,
} from './NotFound.styled';
import {
    CopyrightsHeartIcon,
    ReactIcon
} from '../../Components/Footer/Footer.styled';
import ParticlesAnimation from '../ParticlesAnimation';

function PageNotFound() {

    useTitle('Not Found | Marouane Edghoughi')

    return(
        <>
            <Container fluid={true}>
                <Row className="justify-content-center text-center p-5">
                    <Col sm={12}>
                        <HeroTitle>404 Page Not Found</HeroTitle>
                    </Col>
                    <Col sm={12} className="py-5">
                        <h3>The page you're looking for does not exist (&gt;_&lt;) </h3>
                    </Col>
                    <Col>
                        <Link to="/">
                            <BackHome>
                                <Home />
                                Return to home page
                            </BackHome>
                        </Link>
                    </Col>
                </Row>
                <Row className="fixed-bottom justify-content-center text-center">
                    <Col xs={8}>
                        {/** Copyright section that outputs the current year*/}
                        <p>&copy;{new Date().getFullYear()} made with <CopyrightsHeartIcon /> and <a href="https://reactjs.org/" className="link" target="_blank" rel="noopener noreferrer" ><ReactIcon /> React</a></p>
                    </Col>
                </Row>
            </Container>
            <ParticlesAnimation />
        </>
    );
}

export default PageNotFound;