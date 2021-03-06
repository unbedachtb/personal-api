var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 9001;
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.post('/hobbies', mainCtrl.addToHobbies);
app.put('/name', mainCtrl.changeName);
// app.put('/location', mainCtrl.changeLocation);
app.listen(port, function() {
  console.log('listening on port 9001');
});
