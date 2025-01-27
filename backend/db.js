const mysql = require('mysql2');

// Create a connection to the yegnaschool database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '582005',
  database: 'yegnaschool'
});

// Connect to the database and log any errors
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;
