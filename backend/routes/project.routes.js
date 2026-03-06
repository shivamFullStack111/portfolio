const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const upload = require("../middleware/upload");
const Project = require("../models/project.model");
const adminAuth = require("../middleware/adminAuth");

/* GET ALL */

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* GET ONE */

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* CREATE */

router.post("/", adminAuth, upload.array("images", 10), async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      tools: JSON.parse(req.body.tools),
      features: JSON.parse(req.body.features),
      webUrl: req.body.webUrl,
      downloadLink: req.body.downloadLink,
      images: imagePaths,
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* UPDATE */

router.put("/:id", adminAuth, upload.array("images", 10), async (req, res) => {
  try {
    let existingImages = JSON.parse(req.body.existingImages || "[]");

    /* NEW IMAGES */

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file) => `/uploads/${file.filename}`);

      existingImages = [...existingImages, ...newImages];
    }

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        tools: req.body.tools ? JSON.parse(req.body.tools) : [],
        features: req.body.features ? JSON.parse(req.body.features) : [],
        webUrl: req.body.webUrl,
        downloadLink: req.body.downloadLink,
        images: existingImages,
      },
      { new: true },
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* DELETE */

router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    project.images.forEach((img) => {
      const imgPath = path.join(__dirname, "..", img);

      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    });

    await Project.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
