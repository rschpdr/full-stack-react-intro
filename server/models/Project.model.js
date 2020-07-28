const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

// [
//   {
//     title: "Project 1",
//     description: "blablalbab",
//     tasks: [
//       {
//         title: "task1",
//         description: "blablablalbab",
//         project: "id do projeto",
//       },
//       {
//         title: "task2",
//         description: "blablablalbab",
//         project: "id do projeto",
//       },
//     ],
//   },
// ];
