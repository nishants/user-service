var Sequelize = require('sequelize'),
    config    = require('./config'),
    sequelize = new Sequelize(config.db.url()),
    schema    = sequelize.define('user', {
      firstName: {
        field     : 'firstName',
        type      : Sequelize.STRING
      },
      lastName: {
        field     : 'lastName' ,
        type      : Sequelize.STRING
      },
      mail: {
        field     : 'mail',
        type      : Sequelize.STRING,
        allowNull : false,
        unique    : true
      },
      password: {
        field     : 'password',
        type      : Sequelize.STRING,
        allowNull : false,
      },
      since: {
        field       : 'since',
        type        : Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      lastSeen: {
        field       : 'lastSeen',
        type        : Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }});

sequelize.sync({force: false});

module.exports = {
  create : function(user){
    return schema.create(user);
  },
  findOne : function(mail, password){
    return schema.findOne({where: {mail: mail, password: password},})
  },
  findAll : function(){
    return schema.findAll();
  }
};