const bookModel = require('../models/books');

exports.get = (req, res) => {
  const user = req.user;
  const name = req.name;

  bookModel.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('moreBook', {books, user, name});
    }
  });
};
