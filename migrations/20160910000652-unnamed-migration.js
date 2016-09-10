'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
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
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users')
  }
};
