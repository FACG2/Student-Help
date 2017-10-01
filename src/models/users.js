const connection = require('./database/db_connection.js');
require('env2')('./config.env');

// new user "register"
exports.register = (name, email, password, cb) => {
  const sql = {
    text: `INSERT INTO students (name,email,password) VALUES ($1,$2,$3)`,
    values: [name, email, password]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};
// git user by name and email
exports.getUser = (name, email, cb) => {
  const sql = {
    text: `SELECT name,email FROM students WHERE name = $1 && email = $2`,
    values: [name, email]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// git user by only email
exports.getUserByemail = (email, cb) => {
  const sql = {
    text: `SELECT * FROM students WHERE email = $1`,
    values: [email]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      cb(null, result.rows);
    }
  });
};

// make update for existed user
exports.Updateuser = (obj, cb) => {
  const sql = {
    text: `UPDATE students SET name = $1, email = $2 , password = $3 , img = $4`,
    values: [obj.name, obj.email, obj.password, obj.img]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      cb(null, result.rows[0]);
    }
  });
};

