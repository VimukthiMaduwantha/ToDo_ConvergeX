const { json } = require("sequelize");
const sequelize = require("../db");


// Add task

const CreateTask = async (req, res) => {
    console.log("hello")
    try {
        const [results, metadata] = await sequelize.query(`
            INSERT INTO task(TaskTitle, TaskDescription)
            VALUES(:taskTitle, :taskDecription)
        `, {
            replacements: {
                taskTitle: req.body.taskTitle,
                taskDecription: req.body.taskDecription
            }
        });
        res.json(results)
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

// Get top 5 tasks
const GetRecentTasks = async (req, res) => {
    console.log("test")
    try {
        const [results, metadata] = await sequelize.query('SELECT * FROM task WHERE Status = 1 ORDER BY TaskID DESC LIMIT 5');
        res.json(results);
    } catch (error) {
        return res.status(500).json({ err: error.message })
    }
}

// Finish tasks
const FinishTask = async (req, res) => {
    try {
        const id = req.params.id;
        const [results, metadata] = await sequelize.query(`
            UPDATE task 
            SET 
                Status = 0
            WHERE TaskID = :TaskID
        `, {
            replacements: {
                TaskID: id,
            }
        });
        res.json(results)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}



module.exports = {
    CreateTask,
    GetRecentTasks,
    FinishTask
}