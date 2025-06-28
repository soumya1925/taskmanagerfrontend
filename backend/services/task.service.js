const Task = require("../models/task.model");

class TaskService {
  // Get all tasks
  find = async () => {
    const tasks = await Task.find({});
    return tasks;
  };

  // Create a new task
  create = async (body) => {
    const task = new Task(body);
    const savedTask = await task.save();
    return savedTask;
  };

  // Update an existing task
  update = async (id, body) => {
    const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });
    return updatedTask;
  };

  // Delete a task
  delete = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    return deletedTask;
  };
}

module.exports = TaskService;
