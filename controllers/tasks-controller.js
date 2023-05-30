const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getTask = (req, res) => {
    res.json({ taskID: req.params.id });
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const updateTask = (req, res) => {
    res.send("update a single task");
}

const removeTask = (req, res) => {
    res.send("remove a single task");
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    removeTask
};