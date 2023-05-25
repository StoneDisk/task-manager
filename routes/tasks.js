const express = require('express');
const router = express.Router();
// controller imports
const tasks_controller = require('../controllers/tasks-controller');

// this route provides all tasks
router.route("/").get(tasks_controller.getAllTasks);

module.exports = router;