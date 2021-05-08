export default function validateInfo(values) {
    let errors = {};

    // Full Name validation
    if (values.name === '') {
        errors.name = 'Name is required';
    }

    // Email validation
    if (values.email === '') {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (values.subject === '') {
        errors.subject = 'Subject is required';
    }

    // Message validation
    if (values.message === '') {
        errors.message = 'Please, leave me a message';
    }

    return errors;
}