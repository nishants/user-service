var express     = require('express'),
    bodyParser  = require('body-parser'),
    pg          = require('pg');

var dbClient    = require('./client')(pg),
    app         = express(),
    users       = require('./routes/users')(app, dbClient),
    DATABASE_URL= process.env.DATABASE_URL || "postgres://dawn:12345@localhost:5432/postgres";

app.use(bodyParser.json()); // for parsing application/json
app.set('port', (process.env.PORT || 5000));


var sendSuccess = function(response, data){
  res.sendStatus(200);
  response.send(data);
};



app.get('/db', function (request, response) {
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


