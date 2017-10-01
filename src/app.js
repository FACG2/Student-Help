const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use((req, res, next) => {
  next();
});

app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use((req, res, next) => {
  if (req.cookies.email) {
    req.user = req.cookies.email;
    req.name = req.cookies.name;
  }
  next();
});
app.use((req, res, next) => {
  next();
});
// take user name

app.use((req, res, next) => {
  next();
});

app.use(controllers);
module.exports = app;
