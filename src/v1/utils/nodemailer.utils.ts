<<<<<<< HEAD
import nodemailer from "nodemailer";
import dotenv from "dotenv";
=======
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

dotenv.config();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
<<<<<<< HEAD
  service: "gmail",
=======
  service: 'gmail',
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

<<<<<<< HEAD
const logoUrl = "";
=======
const logoUrl = '';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

async function sendEmail(
  email: string,
  subject: string,
  htmlContent: string
): Promise<void> {
  try {
    await transporter.sendMail({
<<<<<<< HEAD
      from: '<APP_NAME> Team" <support@team.com>', // Replace with your app name and your Gmail email address
=======
      from: 'DTCE Team" <support@dtceteam.com>', // Replace with your app name and your Gmail email address
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
      to: email,
      subject,
      html: htmlContent,
    });
    console.log(`${subject} email sent successfully`);
  } catch (error) {
    console.error(`Error sending ${subject} email:`, error);
  }
}

const emailTemplate = (content: string) => `
  <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet">
  <div style="font-family: 'DM Sans', 'Inter', sans-serif; color: gray; padding: 20px; border: 1px solid #D9D9D9; max-width: 600px; margin: auto; animation: fadeIn 1s ease-in-out;">
    
    <div style="text-align: center; margin-bottom: 20px;">
<<<<<<< HEAD
      <img src="${logoUrl}" alt="<APP_NAME> Logo" style="width: 150px; height: auto; animation: bounceIn 1.5s;">
    </div>
    ${content}
    <div style="text-align: center; margin-top: 20px; color: #3A6BE4;">
      <p>Best regards,<br>The <APP_NAME> Team</p>
=======
      <img src="${logoUrl}" alt="DTCE Logo" style="width: 150px; height: auto; animation: bounceIn 1.5s;">
    </div>
    ${content}
    <div style="text-align: center; margin-top: 20px; color: #3A6BE4;">
      <p>Best regards,<br>The DTCE Team</p>
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    </div>
  </div>
  <style>
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes bounceIn {
      0%, 20%, 40%, 60%, 80%, 100% {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(.9, .9, .9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(.97, .97, .97);
      }
      100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  </style>
`;

async function sendVerificationEmail(
  email: string,
  code: number
): Promise<void> {
<<<<<<< HEAD
  const subject = "Email Verification - <APP_NAME>";
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Hello Newbie, Welcome to <APP_NAME>!</h1>
=======
  const subject = 'Email Verification - DTCE';
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Hello Newbie, Welcome to DTCE!</h1>
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    <p style="font-weight: bold;">Thank you for signing up. To complete your registration, please verify your email address using the code below:</p>
    <div style="background-color: #f0f4ff; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center; animation: fadeIn 1s;">
      <h2 style="color: #3A6BE4; font-family: monospace; user-select: all; font-weight: bold;">${code}</h2>
      <p style="font-weight: bold;">You can copy the code above and paste it into the verification field on our website.</p>
    </div>
    <p style="font-weight: bold;">We are excited to have you on board. If you have any questions, feel free to contact our support team.</p>
  `);
  await sendEmail(email, subject, htmlContent);
}

async function sendForgotPasswordEmail(
  email: string,
  code: number
): Promise<void> {
<<<<<<< HEAD
  const subject = "Forgot Password - <APP_NAME>";
=======
  const subject = 'Forgot Password - DTCE';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Forgot Password,?</h1>
    <p style="font-weight: bold;">We received a request to reset your password. Use the code below to reset your password:</p>
    <div style="background-color: #f0f4ff; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center; animation: fadeIn 1s;">
      <h2 style="color: #3A6BE4; font-family: monospace; user-select: all; font-weight: bold;">${code}</h2>
      <p style="font-weight: bold;">You can copy the code above and paste it into the password reset field on our website.</p>
    </div>
    <p style="font-weight: bold;">If you did not request a password reset, please ignore this email or contact our support team.</p>
  `);
  await sendEmail(email, subject, htmlContent);
}

<<<<<<< HEAD
async function sendWelcomeEmail(email: string): Promise<void> {
  const subject = "Welcome to <APP_NAME>!";
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Welcome Newbie,!</h1>
    <p style="font-weight: bold;">We are thrilled to have you with us. Enjoy exploring <APP_NAME> and all the features we offer.</p>
=======
async function sendWelcomeEmail(
  email: string,
): Promise<void> {
  const subject = 'Welcome to DTCE!';
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Welcome Newbie,!</h1>
    <p style="font-weight: bold;">We are thrilled to have you with us. Enjoy exploring DTCE and all the features we offer.</p>
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    <p style="font-weight: bold;">If you have any questions, feel free to reach out to our support team. We are here to help you.</p>
  `);
  await sendEmail(email, subject, htmlContent);
}

<<<<<<< HEAD
async function sendResetPasswordEmail(email: string): Promise<void> {
  const subject = "Password Reset Successful - <APP_NAME>";
=======
async function sendResetPasswordEmail(
  email: string,
): Promise<void> {
  const subject = 'Password Reset Successful - DTCE';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
  const htmlContent = emailTemplate(`
    <h1 style="color: #3A6BE4; font-weight: bold; animation: textSlideIn 1s ease-in-out;">Hi Newbie,</h1>
    <p style="font-weight: bold;">Your password has been successfully reset. You can now log in with your new password.</p>
    <p style="font-weight: bold;">If you did not request this, please contact our support team immediately.</p>
  `);
  await sendEmail(email, subject, htmlContent);
}

<<<<<<< HEAD
export {
  sendVerificationEmail,
  sendForgotPasswordEmail,
  sendWelcomeEmail,
  sendResetPasswordEmail,
=======
export { 
  sendVerificationEmail, 
  sendForgotPasswordEmail, 
  sendWelcomeEmail, 
  sendResetPasswordEmail 
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
};
