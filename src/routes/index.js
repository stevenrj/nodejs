const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', { title: 'First NodeJS website' });
});

router.get('/contato', (req, res) => {
  res.render('contato', { title: 'Contato Page' });
});

module.exports = router;
