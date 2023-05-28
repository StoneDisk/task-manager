const express = require('express');
const app = express();
// import routes
const tasksRoutes = require('./routes/tasks');
// MongoDB Atlas database connection 
const connectDB = require('./db/connect');
// Needed to read environment variables
require('dotenv').config();

// Middlewares
app.use(express.json());


// Routes
app.get("/hello", (req, res) => {
    res.send("Task Manager App");
});

// this middleware will setup taskRoutes to use the indicated base / root path
app.use("/api/v1/tasks", tasksRoutes);


const port = 3000;
// function that first connects to the database then starts the server 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is online, listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();

