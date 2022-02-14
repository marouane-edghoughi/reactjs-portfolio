import { useState } from 'react';

import { Formik } from 'formik';
import {
    Form,
    Alert
} from 'react-bootstrap';

import {
    FormControl,
    ErrorMessage,
    SendButton,
    Arrow
} from './ContactForm.styled';

import { sendMessage } from '../../client';

function ContactForm() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(null);

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
        <Formik
            initialValues={
                values
            }
            validate={values => {

                const errors = {};

                if (!values.name) {
                    errors.name = 'Name is required';
                }
                if (!values.email) {
                    errors.email = 'Email address is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Please enter a valid email address';
                }
                if (!values.subject) {
                    errors.subject = 'Subject is required';
                }
                if (!values.message) {
                    errors.message = 'Please, leave me a message'
                }

                return errors;
            }}
            onSubmit={(message, { setSubmitting, resetForm }) => {
                sendMessage(message)
                .then(res => {
                    if(res.data.success) {
                        setSubmitting(false);
                        setIsSent(true);
                        resetForm({
                            values: ''
                        });
                    } else {
                        setSubmitting(false);
                        setIsSent(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setSubmitting(false);
                    setIsSent(false);
                });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                resetForm,
                isSubmitting
                /* and other goodies */
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='full-name' >
                        <Form.Label>Full Name</Form.Label>
                        <FormControl
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name &&
                            <ErrorMessage>
                                {errors.name}
                            </ErrorMessage>
                        }
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='email' >
                        <Form.Label>Email</Form.Label>
                        <FormControl
                            name="email"
                            type="text"
                            inputmode='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email &&
                            <ErrorMessage>
                                {errors.email}
                            </ErrorMessage>
                        }
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='subject' >
                        <Form.Label>Subject</Form.Label>
                        <FormControl
                            name="subject"
                            type="text"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.subject && touched.subject &&
                            <ErrorMessage>
                                {errors.subject}
                            </ErrorMessage>
                        }
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='message'>
                        <Form.Label>Message</Form.Label>
                        <FormControl
                            id="message"
                            name="message"
                            as="textarea"
                            rows={5}
                            className='form-control'
                            textarea
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.message && touched.message &&
                            <ErrorMessage>
                                {errors.message}
                            </ErrorMessage>
                        }
                    </Form.Group>

                    <SendButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                        <Arrow />
                    </SendButton>

                    {isSent === true && <AlertMessageSent />}
                    {isSent === false && <AlertMessageNotSent />}
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;