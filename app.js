const express = require('express');
const app = express();
// import routes
const tasksRoutes = require('./routes/tasks');

// Middlewares
app.use(express.json());


// Routes
app.get("/hello", (req, res) => {
    res.send("Task Manager App");
});

// this middleware will setup taskRoutes to use the indicated base / root path
app.use("/api/v1/tasks", tasksRoutes);


const port = 3000;
app.listen(port, console.log(`Server is online, listening on port ${port}`));