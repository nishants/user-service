'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'user',
        'password',
        Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
        'user',
        'password'
    )
  }
};
