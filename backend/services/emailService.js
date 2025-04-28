const sgMail = require('@sendgrid/mail');

// Fetch SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendWelcomeEmail(to, name) {
  const msg = {
    to,
    from: SECUREMAILFROM,
    subject: 'Welcome!',
    html: `<p>Hi ${name}, thanks for signing up!</p>`
  };
  return sgMail.send(msg);
}

module.exports = { sendWelcomeEmail };