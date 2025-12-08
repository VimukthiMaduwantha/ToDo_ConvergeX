require("dotenv").config();
const { Sequelize } = require("sequelize");

// Use environment variables for all DB configuration
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

module.exports = sequelize;