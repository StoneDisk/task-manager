const express = require('express');
const app = express();
// import routes
const tasksRoutes = require('./routes/tasks');
// MongoDB Atlas database connection 
const connectDB = require('./db/connect');
// Needed to read environment variables
require('dotenv').config();
const invalidResourceWarning = require('./middlewares/404');
const serverErrorHandler = require('./middlewares/error-handler');

/* Middlewares */
app.use(express.json());
app.use(express.static('./public'));

// this middleware will setup taskRoutes router object as the routing 
// mechanism for this app and to use the indicated base / root path
app.use("/api/v1/tasks", tasksRoutes);

// this middleware is trigerred when client tries to access 
// a non-existent resource
app.use(invalidResourceWarning);
// this middleware is triggered when the error originated from
// the server in place of the default express error handler
app.use(serverErrorHandler);


const port = process.env.PORT || 3000;
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

