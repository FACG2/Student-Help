const connection = require('./database/db_connection.js');
require('env2')('./config.env');

// add book
exports.addBook = (obj, cb) => {
  const sql = {
    text: `INSERT INTO books (title,isbn,version,auther,img_url,creator_email) VALUES ($1,$2,$3,$4,$5,$6)`,
    values: [obj.title, obj.isbn, obj.version, obj.auther, obj.img_url,obj.creator_email]

  };
  connection.query(sql, (err, result) => {
    if (err) {
      const existed = new Error('Existed Book');
      cb(existed);
    } else {
      cb(null, result);
    }
  });
};
//


exports.addBook = (obj, cb) => {
  const sql = {
    text: `INSERT INTO books (title,isbn,version,auther,img_url,status,booking_date) VALUES ($1,$2,$3,$4,$5,$6,$6)`,
    values: [obj.title, obj.isbn, obj.version, obj.auther, obj.img_url, obj.status, obj.booking_date]


  };
//   connection.query(sql, (err, result) => {
//     if (err) {
//       const existed = new error('Existed Book');
//       cb(existed);
//     } else {
//       cb(null, result);
//     }
//   });
};

// update book
exports.updateBook = (obj, cb) => {
  const sql = {
    text: `UPDATE books SET title = $1, isbn = $2 , version = $3 , auther = $4, img_url = $5`,
    values: [obj.title, obj.isbn, obj.version, obj.auther, obj.img_url]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errupdate = new Error('Cant make Update');
      cb(errupdate);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// delete book
exports.deleteBook = (obj, cb) => {
  const sql = {
    text: `DELETE FROM books WHERE id = $1`,
    values: [obj.id]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errdelete = new Error('Cant make Delete');
      cb(errdelete);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// search book by title
exports.searchBookByTitle = (obj, cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url FROM books WHERE title = $1`,
    values: [obj.title]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errsearch = new Error('Cant make search');
      cb(errsearch);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// search book by auther
exports.searchBookByAuther = (obj, cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url FROM books WHERE auther = $1`,
    values: [obj.auther]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errsearch = new Error('Cant make search');
      cb(errsearch);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// search book by ISBN
exports.searchBookByISBN = (obj, cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url FROM books WHERE isbn = $1`,
    values: [obj.isbn]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errsearch = new Error('Cant make search');
      cb(errsearch);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

// show all books
exports.showAllBooks = (cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url FROM books`
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errShow = new Error('Cant make show books');
      cb(errShow);
    } else {

      cb(null, result.rows);

    }
  });
};
