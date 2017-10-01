const userModel = require('../models/users');
const {hash} = require('../helper/auth');

exports.get = (req, res) => {
  if (req.user) {
    res.redirect('/profile');
  } else {
    res.render('signup');
  }
};

exports.post = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.password2;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.match(re)) { return res.render('signup', {errorMessage: 'email is  not correct'}); }
  if (password !== confirmPassword) {
    return res.render('signup', {errorMessage: 'password is not match'});
  }
  hash(password, (err, hashPassword) => {
    if (err) {
      return next(err);
    }

    userModel.getUserByemail(email, (error, result) => {
      if (error) {
        return next(error);
      }
      if (result.length !== 0) {
        return res.render('signup', {errorMessage: 'User is existed'});
      }
      userModel.register(name, email, hashPassword, (error, response) => {
        if (error) {
          return next(error);
        }
        res.cookie('email', email);
      // TODO login user here
        res.redirect('/home');
      });
    });
  });
};
