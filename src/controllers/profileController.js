const bookModel = require('../models/books');
const userModel = require('../models/users');

exports.get = (req, res, next) => {
  const user = req.user;
  const name = req.name;
  userModel.getUserByemail(user, (err, userInfo) => {
    if (err) {
      return next(err);
    }
    userInfo = userInfo[0];
    bookModel.showBooksByUser(user, (err, books) => {
      if (err) {
        return next(err);
      }
      res.render('profile', {books, user, userInfo, name});
    });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  const email = req.user;
  bookModel.deleteBook(id, email, (err, books) => {
    if (err) {
      return next(err);
    }
    res.redirect('/profile');
  });
};

exports.getBookById = (req, res, next) => {
  bookModel.getBookById(req.params.id, (err, books) => {
    if (err) {
      return next(err);
    }

    res.send(books.rows[0]);
  });
};

exports.update = (req, res, next) => {
  bookModel.updateBook(
    req.body.id, req.body.title,
    req.body.isbn, req.body.version,
    req.body.auther, req.body.img_url, (err, books) => {
      if (err) {
        return next(err);
      }
      res.redirect('/profile');
    });
};
