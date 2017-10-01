
const fs = require('fs');
const dbConnection = require('./db_connection.js');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('Building successfuly!');
  }
});
