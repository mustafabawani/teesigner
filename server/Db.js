const http = require("http");
require("dotenv").config()
const host = process.env.host;
const user = process.env.user;
const database = process.env.database;
const pass = process.env.password;

//Connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "password",
    database : "tees"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;