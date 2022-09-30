const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sendGridMail = require('@sendgrid/mail');
process.env.SENDGRID_API_KEY = ' SG.a736ZzQGROSphaU4fgQMZw'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  to_email = req.body.email;
  from_email = 'mengqianh@deakin.edu.au'
  subject_email = 'Welcome ~'
  text_email = 'Welcome ~'
  html_email = 'Sendgrid Message ~'
  const message = {
    to: to_email,
    from: from_email,
    subject: subject_email,
    text: text_email,
    html: html_email,
  };
  require('dotenv').config();
  sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

  sendGridMail.send(message).then(() => {
    console.log('Successfully sent ~');
  });

  res.send("'Successfully sent ~'");
});

app.listen(8888, function (request, response) {
  console.log('server is running at port 8888 ~');
});
