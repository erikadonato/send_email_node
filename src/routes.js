const express = require('express');

const routes = express.Router()

const EmailController = require('./controllers/sendEmailController');
 
routes 
    .get('/send-email', EmailController.sendEmail)
    
module.exports = routes;