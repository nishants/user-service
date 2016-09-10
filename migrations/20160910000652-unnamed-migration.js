'use strict';
  var Sequelize     = require('sequelize'),
    config          = require('../app/config'),
    sequelize       = new Sequelize(config.db.url());

module.exports = {
  up: function () {
    sequelize.define('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

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
      },
      createdAt: {
        field       : 'createdAt',
        type        : Sequelize.DATE,
      },
      updatedAt: {
        field       : 'updatedAt',
        type        : Sequelize.DATE,
      }
    });
    return sequelize.sync({force: false});
  },

  down: function () {
    sequelize.dropTable('users')
  }
};
