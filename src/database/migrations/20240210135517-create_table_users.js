'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      member_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'members',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true
      }      
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
