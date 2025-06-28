const TaskService = require("../services/task.service");

// Create an instance of the TaskService
const TaskServiceInstance = new TaskService();

// Controller to get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await TaskServiceInstance.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;


    const linkedFile= req.file ? { data:req.file.buffer, contentType:req.file.mimetype}:null;

    const newTask = await TaskServiceInstance.create({
      title,
      description,
      deadline,
      linkedFile
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to update an existing task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await TaskServiceInstance.update(id, req.body);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await TaskServiceInstance.delete(id);
    res.status(204).send(); // 204: No Content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export all controllers
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
