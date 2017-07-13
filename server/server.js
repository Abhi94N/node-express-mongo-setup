const express = require('express'); //middleware web framework for node


var app = express();

app.get('/', (req, res) => {
  res.send('express setup');
})

app.listen(3000, () => {
  console.log("Server set up");
});

module.exports  = {
  app //export primarily for testing
}
