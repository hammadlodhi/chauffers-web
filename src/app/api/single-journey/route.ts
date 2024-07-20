import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("123");
  console.log(body);
  const {
    name,
    email,
    phone,
    pickup_address,
    destination_address,
    hours_of_waiting,
    return_pickup_address,
    return_destination_address,
    car_type,
    journey_type,
    pickup_time,
    destination_time,
    description,
  } = body;

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // e.g., 'gmail'
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "connect@schauffeur.com",
    subject: "Car Booking Form Submission",
    text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Pickup Address: ${pickup_address}
Destination Address: ${destination_address}
${hours_of_waiting ? `Hours of Waiting: ${hours_of_waiting}\n` : ""}
${return_pickup_address ? `Return Pickup Address: ${return_pickup_address}\n` : ""}
${return_destination_address ? `Return Destination Address: ${return_destination_address}\n` : ""}
Car Type: ${car_type}
Journey Type: ${journey_type}
Date: ${pickup_time}
Time: ${destination_time}
Description: ${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
