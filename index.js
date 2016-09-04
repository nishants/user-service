var express     = require('express'),
    app         = express(),
    users       = require('./routes/users'),
    bodyParser  = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  res.sendStatus(200);
  response.send({
    message: "hello"
  });
});

users(app);

var sendSuccess = function(response, data){
  res.sendStatus(200);
  response.send(data);
};



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


