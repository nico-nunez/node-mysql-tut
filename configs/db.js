const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'join_us',
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  insecureAuth: true,
});

module.exports = connection;
