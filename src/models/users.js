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
      const existed = new Error('Error in getting all users');
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
      const existed = new Error('Error in getting all users');
    } else {
      cb(null, result.rows);
    }
  });
};

// git user by only name
exports.getUserByName = (name, cb) => {
  const sql = {
    text: `SELECT name FROM students WHERE name = $1`,
    values: [email]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const existed = new Error('Error in getting all users');
    } else {
      cb(null, result.rows[0]);
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
      const errupdate = new Error('Cant make Update');
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// make checkuser by name
exports.CheckuserByname = (name, cb) => {
  getUserByName(name, (err, result) => {
    if (err) {
      const notexisted = new Error('Error in getting  User');
    } else {
      if (result) {
        cb(null, result.name === name);
      } else {
        cb(null, false);
      }
    }
  });
};
// make checkuser by email
exports.CheckuserByemail = (email, cb) => {
  getUserByemail(email, (err, result) => {
    if (err) {
      const notexisted = new Error('Error in getting  User');
    } else {
      if (result.length) {
        cb(null, result[0].email === email);
      } else {
        cb(null, false);
      }
    }
  });
};
// make checkuser by name and email
exports.Checkuser = (name, mail, cb) => {
  getUser(name, email, (err, result) => {
    if (err) {
      const notexisted = new Error('Error in getting  User');
    } else {
      if (result) {
        cb(null, result.email === email && result.name === name);
      } else {
        cb(null, false);
      }
    }
  });
};
