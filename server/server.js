const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`\x1b[38;5;37mConnection has been established successfully.\x1b[0m`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

// task routes
const Task = require('./routes/TaskRoute');
app.use('/api/task', Task);


app.listen(port, () => {
    console.log(`\x1b[38;5;37mServer running on http://localhost:${port}\x1b[0m`);
});
