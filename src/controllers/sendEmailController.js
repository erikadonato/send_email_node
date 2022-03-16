const { request, response } = require('express');
const mailSender = require('../utils/sendEmail')

  module.exports={  
    async sendEmail(request, response){
        const people_to_send =
        "person1@email.com.br, person2@email.com.br, person3@email.com.br"
        mailSender.sendEmail(
            people_to_send,
            "Email title",
            "Email message",
        );
      }
    }