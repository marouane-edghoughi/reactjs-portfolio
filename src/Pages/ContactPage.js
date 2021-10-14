import React from 'react';
import Content from '../Components/Content';
import Form from 'react-bootstrap/Form';
import { Row, Col, Alert } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import validate from '../Components/validateInfo';
import useForm from "../Components/useForm";
import { useTitle } from '../Components/useTitle';

function ContactPage (props) {

    useTitle('Contact | Marouane Edghoughi');

    const {handleChange, handleSubmit, values, errors, isSending} =  useForm(validate);

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
                    <Col className="">
                        <span>You can simply </span>
                        <a className="contact-email" href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer">
                            <span className="ml-1">send me an email </span>
                            <FiArrowRight />
                        </a>
                    </Col>
                </Row>
            </Content>
            <Footer/>
        </>
    );
}

export default ContactPage;