import { useState } from 'react';
import useCurrState from 'react-usestateref';
import Axios from 'axios';

const useForm = (validate) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        disabled: null,
        emailSent: null
    });

    // Handle user input data
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues ({
            ...values,
            [name] : value
        });
    }

    const [errors, setErrors, ref] = useCurrState({});

    // Show sending status on button
    const [isSending, setIsSending] = useState(false);


    // Send the message upon validation
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(validate(values));

        setValues({
            ...values,
            disabled: true
        })

        const API_ENDPOINT = 'https://api.edghoughi.com/email/send';

        if (Object.keys(ref.current).length === 0) {

            setIsSending(true);

            // Sends POST request to the API endpoint with the given data and returns sending status
            Axios.post(API_ENDPOINT, values)
            .then(res => {
                if(res.data.success) {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        disabled: false,
                        emailSent: true
                    });
                    setIsSending(false);
                } else {
                    setValues({
                        ...values,
                        disabled: false,
                        emailSent: false
                    });
                    setIsSending(false);
                }
            })
            .catch(err => {
                setValues({
                    ...values,
                    disabled: false,
                    emailSent: false
                });
                setIsSending(false);
            });
        } else {
            setValues({
                ...values,
                disabled: false
            })
        }
    }

    return { handleChange, handleSubmit, values, errors, isSending };

}

export default useForm;