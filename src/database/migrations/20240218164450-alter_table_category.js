'use strict';

const CategoryModel = require('../../models/categories');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('categories', 'img', {
      type: Sequelize.DataTypes.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('categories', 'img')
  }
};
