
const test = require('tape');
const moduleuser = require('../src/models/users');
const connection = require('../src/models/database/db_connection.js');

test('get user', (t) => {
  moduleuser.getUserByemail('ghadeer.box@gmail.com', (err, res) => {
    t.notOk(err);
    var actual = res[0];
    var expected = {
      name: 'ghadeer',
      email: 'ghadeer.box@gmail.com',
      password: '$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6',
      img: 'ghadeer.png'
    };
    t.deepEqual(actual, expected, 'should return an object with you have personal information for Ghadeer ');
    t.end();
  });
});

test('Testing database connection', (t) => {
  const sql = '';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res != null, true, 'Should not be empty');
      t.end();
    }
  });
});

test('Testing students', (t) => {
  const sql = `SELECT * FROM students WHERE email = 'ghadeer.box@gmail.com'`;
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length > 0, true, 'Should not be empty');
      t.end();
    }
  });
});

test.onFinish(() => process.exit(0));
