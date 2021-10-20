import React, { useState } from 'react';
import Content from '../Components/Content';
import Form from 'react-bootstrap/Form';
import { 
    Row,
    Col, 
    Alert,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsArrowRight } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import validate from '../Components/validateInfo';
import useForm from "../Components/useForm";
import { useTitle } from '../Components/useTitle';

import { useSpring } from 'react-spring';

function ContactPage (props) {

    useTitle('Contact | Marouane Edghoughi');

    const {handleChange, handleSubmit, values, errors, isSending} =  useForm(validate);

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


    const AlertMessageSent = () => (
        <Alert className="mt-4" variant="success">
            Yesss! Your message was sent successfully!
        </Alert>
    );

    const AlertMessageNotSent = () => (
        <Alert className="mt-4" variant="danger">
            Oops! There was a problem sending your message, please try again.
        </Alert>
    );

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <p>Hi 👋🏻, I'm looking forward to hearing from you! Whether you have a business inquiry or simply want to find out more.</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={values.name} onChange={handleChange} />
                        {errors.name && 
                            <div className="error">
                                {errors.name}
                            </div>
                        }
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="text" value={values.email} onChange={handleChange} />
                        {errors.email && 
                            <div className="error">
                                {errors.email}
                            </div>
                        }
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="subject">Subject</Form.Label>
                        <Form.Control id="subject" name="subject" type="text" value={values.subject} onChange={handleChange} />
                        {errors.subject && 
                            <div className="error">
                                {errors.subject}
                            </div>
                        }
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control className="message-field" id="message" name="message" as="textarea" rows="5" value={values.message} onChange={handleChange} />
                        {errors.message && 
                            <div className="error">
                                {errors.message}
                            </div>
                        }
                    </Form.Group>

                    <button className="send d-inline-block" type="submit" disabled={values.disabled}>
                        {isSending ? 'Sending...' : 'Send'}
                        <BsArrowRight className="arrow" />
                    </button>

                    {values.emailSent === true && <AlertMessageSent />}
                    {values.emailSent === false && <AlertMessageNotSent />}
                </Form>

                <Row className="justify-content-center mt-5 mb-5">
                    <Col xs={5}>
                        <hr className="horizontal-line" />
                    </Col>
                    <Col >
                        <p align="center">OR</p>
                    </Col>
                    <Col xs={5}>
                        <hr className="horizontal-line" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col>
                        <div style={isRevealed ? null : {cursor: 'pointer', textAlign: 'center'}} className="email-area" onClick={() => revealEmail()} >
                            {
                                isRevealed ?

                                <>
                                    <Row className="align-items-center" >
                                        <Col md={11} xs={9}>
                                            <a className="contact-email" href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer" >
                                                <span>marouane@edghoughi.com</span>
                                            </a>
                                        </Col>
                                        <Col md={1} xs={3}>
                                            <OverlayTrigger
                                                overlay={
                                                    isCopied ?

                                                        <Tooltip id={`tooltip-email-copied`}>
                                                            <span>Copied!</span>
                                                        </Tooltip>

                                                    :

                                                        <Tooltip id={`tooltip-copy-email`}>
                                                            <span>Copy Email to Clipboard</span>
                                                        </Tooltip>
                                                }
                                            >
                                                <CopyToClipboard
                                                    text="marouane@edghoughi.com"
                                                    onCopy={() => setIsCopied(true)}
                                                >
                                                    <FaRegCopy 
                                                        className="copy-email"
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
                                        </Col>
                                    </Row>
                                </>

                                :

                                    <span className="email-area-text" style={revealEffect}>Click here to reveal my email address</span>
                            }
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer/>
        </>
    );
}

export default ContactPage;