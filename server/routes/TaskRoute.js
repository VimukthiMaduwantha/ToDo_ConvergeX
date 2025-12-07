const express = require('express');
const taskControlelr = require('../controllers/TaskController');

const TaskRoute = express.Router();

// Create task
TaskRoute.post('/createtask', taskControlelr.CreateTask);

// Get top 5 tasks
TaskRoute.get('/getrecenttask', taskControlelr.GetRecentTasks);

// Finish task
TaskRoute.put('/finishtask/:id', taskControlelr.FinishTask);



module.exports = TaskRoute;
