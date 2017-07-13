const express = require('express'); //middleware web framework for node


var app = express();

app.get('/', (req, res) => {
  res.send('express setup');
})

module.exports  = {
  app //export primarily for testing
}
