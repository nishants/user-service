var express     = require('express'),
    bodyParser  = require('body-parser'),
    bodyParser  = require('body-parser'),
    pg          = require('pg');

var dbConfig      = {
      user      : "vierbvtiwvgelt",
      password  : "GCorFWB6MigCYrDAH3oXKEaXNF",
      host      : "ec2-54-243-204-57.compute-1.amazonaws.com:5432",
      database  : "d3g1dr5aueqm7f",
      dialect   : "postgres",
      ssl       : true,
      url       : function(){
        var url = "<dialect>://<user>:<password>@<host>/<database>";
        return url
            .replace("<dialect>" , dbConfig.dialect)
            .replace("<user>"     ,dbConfig.user)
            .replace("<password>" ,dbConfig.password)
            .replace("<host>"     ,dbConfig.host)
            .replace("<database>" ,dbConfig.database);
      },
    },
    app         = express(),
    DATABASE_URL= process.env.DATABASE_URL || dbConfig.url() ;

pg.defaults.ssl = dbConfig.ssl;
app.use(bodyParser.json()); // for parsing application/json
app.set('port', (process.env.PORT || 5000));


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


