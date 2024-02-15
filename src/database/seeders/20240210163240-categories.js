'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      title: 'geral',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op

    await queryInterface.bulkDelete('categories', {
      [Op.or]: [
        { title: 'geral' },
      ]
    })
  }
};
