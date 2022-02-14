import React, { useState } from 'react';

import { 
    Row,
    Col, 
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import { useSpring } from 'react-spring';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useTitle } from '../../Components/useTitle';
import Hero from '../../Components/Hero/Hero';
import Content from '../../Components/Content';
import ContactForm from '../../Components/ContactForm/ContactForm';
import {
    LineBreak,
    EmailSection,
    CallToAction,
    EmailAddress,
    CopyIcon
} from './ContactPage.styled';
import Footer from '../../Components/Footer/Footer';


function ContactPage (props) {

    useTitle('Contact | Marouane Edghoughi');

    const [isRevealed, setIsRevealed] = useState(false);

    const [fade, setFade] = useState(false);

    const revealEmail = () => {
        setIsRevealed(true);
        setFade(true);
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    const revealEffect = useSpring({
        opacity: fade ? 1 : 0
    });

    const [isCopied, setIsCopied] = useState(false);

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <p>Hi 👋🏻, I'm looking forward to hearing from you! Whether you have a business inquiry or simply want to find out more.</p>

                <ContactForm />

                <Row className="justify-content-center mt-5 mb-5">
                    <Col xs={5}>
                        <LineBreak />
                    </Col>
                    <Col >
                        <p align="center">OR</p>
                    </Col>
                    <Col xs={5}>
                        <LineBreak />
                    </Col>
                </Row>

                <EmailSection
                    style={isRevealed ? null : {cursor: 'pointer', textAlign: 'center'}}
                    onClick={() => revealEmail()}
                >
                    {
                        isRevealed ?

                        <>
                            <EmailAddress
                                href="mailto:marouane@edghoughi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                marouane@edghoughi.com
                            </EmailAddress>
                            <OverlayTrigger
                                delay={100}
                                overlay={
                                    <Tooltip id={`tooltip-copy-email`}>
                                        {
                                            isCopied ? 'Copied!' : 'Copy Email to Clipboard'
                                        }
                                    </Tooltip>
                                }
                            >
                                <CopyToClipboard
                                    text="marouane@edghoughi.com"
                                    onCopy={() => setIsCopied(true)}
                                >
                                    <CopyIcon
                                        alt="Copy Email to Clipboard"
                                        onMouseLeave={() => {
                                                setTimeout(() => {
                                                    setIsCopied(false);
                                                }, 500)
                                            }
                                        }
                                    />
                                </CopyToClipboard>
                            </OverlayTrigger>
                        </>

                        :

                            <CallToAction
                                style={revealEffect}
                            >
                                Click here to reveal my email address
                            </CallToAction>
                    }
                </EmailSection>
            </Content>
            <Footer/>
        </>
    );
}

export default ContactPage;