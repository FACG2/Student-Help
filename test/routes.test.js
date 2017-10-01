
const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('GET /profile', (t) => {
  request(app)
      .get('/profile')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        t.same(res.statusCode, 200, 'Status code is 200');
        t.error(err, 'No error');
        t.end();
      });
});

test.onFinish(() => process.exit(0));
