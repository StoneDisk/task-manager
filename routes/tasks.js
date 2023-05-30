const express = require("express");
const router = express.Router();
// controller imports
const tasks_controller = require("../controllers/tasks-controller");

/*  CRUD routes */
router
  .route("/")
  .get(tasks_controller.getAllTasks)
  .post(tasks_controller.createTask);

router
  .route("/:id")
  .get(tasks_controller.getTask)
  .patch(tasks_controller.updateTask)
  .delete(tasks_controller.removeTask);

module.exports = router;
