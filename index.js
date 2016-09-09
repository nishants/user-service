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
  response.send({data: Users.create({
    firstName : request.body.firstName,
    lastName  : request.body.lastName,
    mail      : request.body.mail,
  })});
});

app.get('/users', function (request, response) {
  pg.connect(DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM users', function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { response.send({results: result.rows}); }
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


