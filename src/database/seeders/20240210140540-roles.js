'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [{
      id: 1,
      title: 'customer',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 2,
      title: 'admin',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }])
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('roles', {
      [Op.or]: [
        { title: 'customer' },
        { title: 'admin' }
      ]
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
