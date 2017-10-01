const book = require('../models/books.js');

exports.get = (req, res, next) => {
  const user = req.user;
  const name = req.name;
  book.showFourBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {books, user, name});
    }
  });
};

exports.getabout = (req, res) => {
  const user = req.user;
  const name = req.name;

  res.render('about', {user, name});
};

exports.getbooks = (req, res) => {
  const user = req.user;
  const name = req.name;

  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('books', {books, user, name});
    }
  });
};
exports.getAllbooks = (req, res) => {
  const user = req.user;
  const name = req.name;

  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('moreBook', {books, user, name});
    }
  });
};

exports.get4books = (req, res) => {
  const user = req.user;
  const name = req.name;

  book.showFourBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('books', {books, user, name});
    }
  });
};

exports.search = (req, res, next) => {
  // take keyword search from student
  const user = req.user;
  const keyword = req.body.keyword;
  const name = req.name;

  book.searchBookByTitle(keyword, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('search', {data, user, name});
    }
  });
};
