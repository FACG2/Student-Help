
const supertest = require('supertest');
const test = require('tape');
const app = require('../src/app');
const moduleuser = require('../src/models/users');
const modulebook = require('../src/models/books');
const connection = require('../src/models/database/db_connection.js');

test('get user', (t) => {
  moduleuser.getUserByemail('ghadeer.box@gmail.com', (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res[0];
      var expected = {
        name: 'ghadeer',
        email: 'ghadeer.box@gmail.com',
        password: '$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6',
        img: 'ghadeer.png'
      };
      t.deepEqual(actual, expected, 'should return an object with you have personal information for Ghadeer ');
      t.end();
    }
  });
});

// test('get books', (t) => {
//   modulebook.getBookById(2,(err, res) => {
//     if (err) {
//       t.notOk(err);
//     } else {
//       var actual = res[0];
//       var expected = {
//         id : 2,
//         title: 'UX/UI',
//         isbn: '978-0134276717',
//         version: '3',
//         auther: 'David',
//         img_url : 'https://cdn-images-1.medium.com/max/1600/1*uVLkFQC3yhZo4Re2Ys2WCw.jpeg'
//          };
//       t.deepEqual(actual, expected, 'should return an object with you have personal information for Ghadeer ');
//       t.end();
//     }
//   });
// });

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
  const sql = 'SELECT * FROM students WHERE email = "ghadeer@gmail.com"';
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
