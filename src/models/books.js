const connection = require('./database/db_connection.js');
require('env2')('./config.env');

// add book
exports.addBook = (book, cb) => {
  const sql = {
    text: `INSERT INTO books (title,isbn,version,auther,img_url,creator_email) VALUES ($1,$2,$3,$4,$5,$6)`,
    values: [book.title, book.isbn, book.version, book.auther, book.img_url, book.creator_email]

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

// search book by title
exports.searchBookByTitle = (title, cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url,creator_email
    FROM books
     WHERE lower(title) like $1 OR lower(auther) like $1 OR lower(isbn) like $1 limit 1`,
    values: [`%${title}%`]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errsearch = new Error('Cant make search');
      cb(errsearch);
    } else {
      cb(null, result.rows);
    }
  });
};

// show all books
exports.showAllBooks = (cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url,creator_email FROM books`
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

// show all books
exports.showFourBooks = (cb) => {
  const sql = {
    text: `SELECT title,isbn,version,auther,img_url,creator_email FROM books limit 4`
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

// show all books for same user

exports.showBooksByUser = (email, cb) => {
  const sql = {
    text: `SELECT id, title,isbn,version,auther,img_url,creator_email FROM books WHERE creator_email = $1`,
    values: [email]
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

// delete book
exports.deleteBook = (id, email, cb) => {
  const sql = {
    text: `DELETE FROM books WHERE id = $1 and creator_email = $2 `,
    values: [id, email]
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

// Updaate book
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
exports.updateBook = (id, title, isbn, version, auther, img_url, cb) => {
  const sql = {

    text: `UPDATE  books SET title = $1, isbn = $2 ,version = $3,auther = $4 ,img_url=$5 `,
    values: [title, isbn, version, auther, img_url]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errUpdate = new Error('Cant make Upadte');
      cb(errUpdate);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

exports.getBookById = (id, cb) => {
  const sql = {
    text: `SELECT id,title,isbn,version,auther,img_url FROM books WHERE id = $1`,
    values: [id]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const errUpdate = new Error('Error Show Book');
      cb(errUpdate);
    } else {
      cb(null, result);
    }
  });
};
