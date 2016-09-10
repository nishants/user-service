'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('user', {
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
      }})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('user')
  }
};
