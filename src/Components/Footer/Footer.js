import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

import { ExternalLink } from '../../theme/globalStyles';

import {
    PageFooter,
    CollabSection,
    ContactButton,
    ContactIcon,
    Github,
    Linkedin,
    Email,
    CopyrightSection,
    CopyrightsHeartIcon,
    ReactIcon,
    PrivacyPolicy
} from './Footer.styled';

function Footer() {

    return(
        <PageFooter>
            <Container fluid={true}>
                    <CollabSection>
                        <h3>Interested in collaboration?</h3>
                        <Link to="/contact">
                            <ContactButton>
                                Contact me
                                <ContactIcon />
                            </ContactButton>
                        </Link>
                    </CollabSection>
                <Row className="justify-content-center m-3">
                    <Col xs="auto">
                        <a href="https://github.com/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                placement='top'
                                delay={100}
                                overlay={
                                    <Tooltip id={`tooltip-github`}>
                                        Github
                                    </Tooltip>
                                }
                            >
                                <forwardRef>
                                    <Github />
                                </forwardRef>
                            </OverlayTrigger>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                placement='top'
                                delay={100}
                                overlay={
                                    <Tooltip id={`tooltip-linkedin`}>
                                        Linkedin
                                    </Tooltip>
                                }
                            >
                                <forwardRef>
                                    <Linkedin />
                                </forwardRef>
                            </OverlayTrigger>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer" >
                            <OverlayTrigger
                                placement='top'
                                delay={100}
                                overlay={
                                    <Tooltip id={`tooltip-email`}>
                                        Email
                                    </Tooltip>
                                }
                            >
                                <forwardRef>
                                    <Email />
                                </forwardRef>
                            </OverlayTrigger>
                        </a>
                    </Col>
                </Row>
                <CopyrightSection>
                    {/** Copyright section that outputs the current year*/}
                    <p>
                        &copy;{new Date().getFullYear()} Crafted with <CopyrightsHeartIcon /> and <ExternalLink href="https://reactjs.org/" className="link" target="_blank" rel="noopener noreferrer" ><ReactIcon /> React</ExternalLink>
                    </p>
                    <PrivacyPolicy to="/privacy-policy">
                        Privacy Policy
                    </PrivacyPolicy>
                </CopyrightSection>
            </Container>
        </PageFooter>
    );
}

export default Footer;