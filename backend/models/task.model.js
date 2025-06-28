const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["TODO", "DONE"], default: "TODO" },
    linkedFile: { data: Buffer ,contetntType:String}, // This is where we store the Blob (PDF or any file)
    deadline: { type: Date, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the model
const taskModel = mongoose.model("Task", taskSchema);

// Confirm model creation
console.log(taskModel);

module.exports = taskModel;
