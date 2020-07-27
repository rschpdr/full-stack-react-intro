const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");

// CREATE - POST a new Task
router.post("/tasks", async (req, res) => {
  try {
    const { title, description, projectID } = req.body;

    const taskResponse = await Task.create({
      title,
      description,
      project: projectID,
    });

    const projectResponse = await Project.updateOne(
      { _id: projectID },
      { $push: { tasks: taskResponse._id } }
    );

    return res.status(201).json({ taskResponse, projectResponse });
  } catch (err) {
    throw new Error(err);
  }
});

// READ - GET a specific Task
router.get("/tasks/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const { id } = req.params;

  try {
    const response = await Task.find({ _id: id });

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

// UPDATE - PUT update the specified Task
router.put("/tasks/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const { id } = req.params;

  try {
    const response = await Task.updateOne({ _id: id }, req.body);

    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
    //throw new Error(err);
  }
});

// DELETE - DELETE the specified Task
router.delete("/tasks/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const { id } = req.params;

  try {
    const response = await Task.deleteOne({ _id: id });

    return res.status(200).json(response);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
