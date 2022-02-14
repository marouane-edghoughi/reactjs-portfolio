import axios from 'axios';

export const sendMessage = (message) =>
    axios.post('https://api.edghoughi.com/email/send', message);