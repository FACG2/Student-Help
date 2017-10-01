const bcrypt = require('bcryptjs');

exports.hash = (password, cb) => {
  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      return cb(err);
    }
    cb(null, hash);
  });
};

exports.compare = (password, hash, cb) => {
  bcrypt.compare(password, hash, (err, isMatch) => {
      // res === true
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
