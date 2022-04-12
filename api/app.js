import config from '../src/privatekeys';

const express = require('express');
const sendGrid = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Paste your secret API key here
const API_KEY = config.API_KEY;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Does nothing than displaying: API Status: Running...
app.get('/', (req, res, next) => {
    res.send('API Status: Running...');
});

app.post('/email/send', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey(API_KEY);

    /**
     * To learn more about Sendgrid for NodeJS checkout the official documentation:
     * https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs
     */

    /**
     * Sendgrid is actually used for marketing purposes, but I found it useful 
     * as I wanted that the contact messages go directly into my email inbox.
     * So the solution was to send an email to one and only recipient which is me.
     */
    const msg = {
        // Change this with your personal email
        to: 'example@gmail.com',
        from: {
            name: req.body.name,
            // Change this with your verified sender email
            email: 'contact@yourdomain.com'
        },
        subject: req.body.subject,
        text: req.body.message,
        html: '<h3>Contact Details</h3><strong>Full Name:</strong><p>' + req.body.name + '</p><p><strong>Email:</strong></p>' + req.body.email + '<br><h3>Message</h3><div style="white-space: pre-line">' + req.body.message + '</div>'
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('Error: ', err);
            res.status(401).json({
                success: false
            });
        });
});

app.listen(process.env.PORT || 3030, '0.0.0.0');