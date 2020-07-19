const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require('./routes/'));

// listen
app.listen(app.get('port'), () => {
  console.log('Listening at port ' + app.get('port'));
});
