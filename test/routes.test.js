
const test =require('tape')
const request= require('supertest');
const app = require('../src/app');
const moduleuser = require('../src/models/users');
const modulebook = require('../src/models/books');
const connection = require('../src/models/database/db_connection.js');

  test('GET /profile', (t) => {

      request(app)
      .get('/profile')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function(err, res) {
        t.same(res.statusCode, 200, 'Status code is 200');
        t.error(err, 'No error');
        t.end();

      });
  });



test.onFinish(() => process.exit(0));
