const getAllTasks = (req, res) => {
    res.send("all task items");
}

const getTask = (req, res) => {
    res.json({ taskID: req.params.id });
}

const addTask = (req, res) => {
    res.json(req.body);
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
    addTask,
    updateTask,
    removeTask
};