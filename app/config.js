
var prod = function(){
  return {
    db: {
      user:     "bxvojwenrxcxwg",
      password: "lVZq51HWlHyN302zwBHCRyEjw9",
      host:     "ec2-54-235-202-71.compute-1.amazonaws.com:5432",
      database: "dbs9oodg5qev83",
      dialect:  "postgres",
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

module.exports = process.env.ENV === "production" ?  prod() : dev() ;
