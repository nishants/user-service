var express     = require('express'),
    bodyParser  = require('body-parser'),
    config      = require('./app/config'),
    pg          = require('pg');

var dbConfig    = config.db,
    Users       = require('./app/users'),
    app         = express(),
    DATABASE_URL= process.env.DATABASE_URL || dbConfig.url() ;

pg.defaults.ssl = dbConfig.ssl;
app.use(bodyParser.json()); // for parsing application/json
app.set('port', (process.env.PORT || 5000));


app.post('/users', function (request, response) {
  Users.create(request.body).then(function(user){
    response.send({data: user});
  }).catch(function(error){
    response.status(409);
    response.send({error: error});
  });
});

app.get('/users', function (request, response) {
  Users.findAll().then(function(user){
    response.send({data: user});
  });
});

app.post('/users/login', function (request, response) {
  var mail     = request.body.mail,
      password = request.body.password;

  Users.findOne(mail, password).then(function(user){
    response.send({data: user});
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


