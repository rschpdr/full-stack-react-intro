const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");

// CREATE - POST Create a new Project
router.post("/projects", async (req, res) => {
  const { title, description } = req.body;

  try {
    const response = await Project.create({
      title,
      description,
      tasks: [],
      owner: req.user._id,
    });

    return res.status(201).json(response);
  } catch (err) {}
});

// READ - GET Projects

router.get("/projects", async (req, res) => {
  try {
    const response = await Project.find({ owner: req.user._id })
      .populate("tasks")
      .exec();

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

// READ - GET Project by ID

router.get("/projects/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    const response = await Project.find({ _id: req.params.id })
      .populate("tasks")
      .exec();

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

// UPDATE - PUT Update Project

router.put("/projects/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    const response = await Project.updateOne({ _id: req.params.id }, req.body);

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

// UPDATE - PUT Update Project

router.delete("/projects/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    const response = await Project.deleteOne({ _id: req.params.id });

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
