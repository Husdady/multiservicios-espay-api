const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const credentials = require("./credentials");

const { NODEMAILER_USER, NODEMAILER_PASS, NODEMAILER_SECRET_KEY } = credentials

const smtp =smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  	secret: NODEMAILER_SECRET_KEY,
  }
})

const transport = nodemailer.createTransport(smtp);

module.exports = transport
