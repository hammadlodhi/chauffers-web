import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  console.log("123");
  console.log(body);
  const { name, email, phone, description } = body;

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'hammadak05@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Error sending email' });
  }
}
