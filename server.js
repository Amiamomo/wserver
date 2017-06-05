var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})


console.log('todo list RESTful API server started on: ' + port);
