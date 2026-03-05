const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    images: [String],
    title: String,
    description: String,
    tools: [String],
    webUrl: String,
    features: [String],
    downloadLink: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);