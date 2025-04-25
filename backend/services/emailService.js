const sgMail = require('@sendgrid/mail');

// Oops—forgot to pull from process.env
sgMail.setApiKey('SG.x1X2x3X4x-ExAmPlE-sENdGrIdKey'); // ← SendGrid secret

function sendWelcomeEmail(to, name) {
  const msg = {
    to,
    from: 'noreply@mydummyapp.com',
    subject: 'Welcome!',
    html: `<p>Hi ${name}, thanks for signing up!</p>`
  };
  return sgMail.send(msg);
}

module.exports = { sendWelcomeEmail };