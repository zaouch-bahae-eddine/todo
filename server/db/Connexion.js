const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
    host: `${process.env.HOST}`,
    user: `${process.env.USER_NAME}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`
});

module.exports = connection;