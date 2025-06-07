const router = require("express").Router();
const { sendMail } = require("../utils");
const Contacts = require("./contactSchema");

router.post("/create", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.send({ success: false, message: "All fields are required" });

    const newContact = new Contacts({
      name: name,
      email: email,
      message: message,
    });

    await newContact.save();

    res.send({ success: true, message: "Message sent!" });

    const info = await sendMail(
      "shvam12340987@gmail.com",
      "New Contact",
      message,
      `  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #2C3E50; color: white; padding: 20px 30px;">
        <h2 style="margin: 0;">New Contact Message</h2>
      </div>
      <div style="padding: 30px;">
        <p style="font-size: 16px; color: #333;">You've received a new message from the contact form.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 15px; color: #555;"><strong>From:</strong> ${email}</p>
        <p style="font-size: 15px; color: #555;"><strong>Message:</strong><br/>${message}</p>
      </div>
      <div style="background-color: #ecf0f1; text-align: center; padding: 15px; font-size: 13px; color: #888;">
        © ${new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  </div>`
    );

    console.log(info);
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

module.exports = router;
