require('env2')('./config.env');
const pg = require('pg');
const {Pool} = require('pg');

var url = '';

if (!process.env.TEST_URL) {
  throw new Error('No DATABASE_URL provided');
}

if (process.env.NODE_ENV === 'test') {
  url = process.env.TEST_URL;
} else {
  url = process.env.STUDENTHELP_URL;
}
const pool = new Pool({connectionString: url, ssl: true});
module.exports = pool;
