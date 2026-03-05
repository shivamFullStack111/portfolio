const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(
    "mongodb+srv://shivam111:shivam111@cluster0.rpeveqo.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json());

// projects
const projectRoutes = require("./routes/project.routes");
app.use("/api/projects", projectRoutes);

// view
const contactFormRoutes = require("./contactForm/contactController");
app.use("/contact-form", contactFormRoutes);

const feedbackRoutes = require("./projectFeedback/projectFeedbackController");
app.use("/feedback", feedbackRoutes);


app.get("/", (req, res) =>
  res.send({ success: true, message: "server running" }),
);





const cron = require("node-cron");
const axios = require("axios");

cron.schedule("*/3 * * * *", async () => {
  try {
    // const response = await axios.get("http://localhost:8000/health");
    const response = await axios.get("https://portfolio-dcwm.onrender.com/");

    console.log("Health check success:", response.data);
  } catch (error) {
    console.error("Health check failed:", error.message);
  }
});

console.log("Cron job started. Running every 3 minutes...");





app.listen(8000, () => {
  console.log("Running on:   ", "http://localhost:8000");
});
