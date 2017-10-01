const bookModel = require('../models/books.js');

exports.get = (req, res) => {
  const user = req.user;
  const name = req.name;

  res.render('search', {user, name});
};

exports.search = (req, res, next) => {
  // take keyword search from student
  const user = req.user;
  const keyword = req.body.keyword;
  const name = req.name;

  bookModel.searchBookByTitle(keyword, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('search', {data, user, name});
    }
  });
};
