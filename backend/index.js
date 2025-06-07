const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://shivam111:shivam111@cluster0.rpeveqo.mongodb.net/chat-fussion?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json());

// view
const contactFormRoutes = require("./contactForm/contactController");
app.use("/contact-form", contactFormRoutes);

const feedbackRoutes = require("./projectFeedback/projectFeedbackController");
app.use("/feedback", feedbackRoutes);

app.get("/", (req, res) =>
  res.send({ success: true, message: "server running" })
);

app.listen(8000, () => {
  console.log("Running on:   ", "http://localhost:8000");
});
