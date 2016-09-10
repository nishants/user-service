
var prod = function(){
  return {
    db: {
      user: "vierbvtiwvgelt",
      password: "GCorFWB6MigCYrDAH3oXKEaXNF",
      host: "ec2-54-243-204-57.compute-1.amazonaws.com:5432",
      database: "d3g1dr5aueqm7f",
      dialect: "postgres",
      ssl: true,
      url: function () {
        var url = "<dialect>://<user>:<password>@<host>/<database>";
        return url
            .replace("<dialect>"  , this.dialect)
            .replace("<user>"     , this.user)
            .replace("<password>" , this.password)
            .replace("<host>"     , this.host)
            .replace("<database>", this.database);
      }
    }
  };
};

var dev = function(){
  return {
    db: {
      user: "dawn",
          password: "12345",
          host: "localhost",
          database: "postgres",
          dialect: "postgres",
          ssl: false,
          url: function () {
        var url = "<dialect>://<user>:<password>@<host>/<database>";
        return url
            .replace("<dialect>"  , this.dialect)
            .replace("<user>"     , this.user)
            .replace("<password>" , this.password)
            .replace("<host>"     , this.host)
            .replace("<database>", this.database);
      }
    }
  };
};

module.exports = prod() ;
