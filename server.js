const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'myportfolio/build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'myportfolio/build', 'index.html'));
  });

app.listen(PORT);
