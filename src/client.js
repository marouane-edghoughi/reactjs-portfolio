import axios from 'axios';
import config from './privatekeys';

// API_ENDPOINT is hosted on api.edghoughi.com
export const sendMessage = (message) =>
    axios.post(config.API_ENDPOINT, message);