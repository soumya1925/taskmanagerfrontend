const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  } = require("../controllers/task.controller");
  const upload= require('../config/multerConfig')
  
  const router = require("express").Router();
  
  // Route mappings
  // GET /tasks → getTasks controller
  router.get("/", getTasks);
  
  // POST /tasks → createTask controller
  router.post("/",upload.single('pdf'),createTask);
  
  // PUT /tasks/:id → updateTask controller
  router.put("/:id", updateTask);
  
  // DELETE /tasks/:id → deleteTask controller
  router.delete("/:id", deleteTask);
  
  module.exports = router;