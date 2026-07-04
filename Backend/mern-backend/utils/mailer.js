import nodemailer from 'nodemailer';

console.log("EMAIL:", process.env.SPORT_COUNCIL_EMAIL);
console.log(
  "PASSWORD EXISTS:",
  !!process.env.SPORT_COUNCIL_APP_PASSWORD
);
console.log(
  "PASSWORD LENGTH:",
  process.env.SPORT_COUNCIL_APP_PASSWORD?.length
);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SPORT_COUNCIL_EMAIL,
    pass: process.env.SPORT_COUNCIL_APP_PASSWORD
  }
});

export const sendQueryEmail = async ({ name, email, phone, sport, summary, message }) => {
  const mailOptions = {
    from: `"Sports Council Portal" <${process.env.SPORT_COUNCIL_EMAIL}>`,
    to: 'sports.council@iiti.ac.in',
    replyTo: email,
    subject: `[New Query] ${sport} - ${summary || 'No summary'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0;">
        <h2 style="color: #2dd4bf;">New Query Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Sport / Topic:</td>
            <td style="padding: 8px;">${sport}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Summary:</td>
            <td style="padding: 8px;">${summary || '-'}</td>
          </tr>
        </table>
        <h3 style="color: #2dd4bf; margin-top: 20px;">Detailed Description:</h3>
        <p style="background: #1e293b; padding: 15px; border-radius: 8px;">
          ${message}
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};