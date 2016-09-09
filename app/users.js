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

schema.sync({force: true}).then(function () {});

module.exports = {
  create : function(user){
    return schema.create({
      firstName : user.firstName,
      lastName  : user.lastName,
      mail      : user.mail,
    });
  },
  findAll : function(){
    return schema.findAll();
  }
};