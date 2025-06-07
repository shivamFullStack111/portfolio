const mongoose = require("mongoose");

const projectFeedbackSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const projectFeedback = mongoose.model(
  "projectFeedback",
  projectFeedbackSchema
);

module.exports = projectFeedback;
