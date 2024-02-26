'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('members', [{
    //   id: 403,
    //   role_id: 1,
    //   email: 'admin@admin.com',
    //   pw_hash: 'oi',
    //   created_at: '1999-01-08',
    //   updated_at: '1999-01-08',
    // }], {});

    // await queryInterface.bulkInsert('users', [{
    //   member_id: 1,
    //   name: 'admin',
    // }], {});

  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op

    // await queryInterface.bulkDelete('users', {
    //   [Op.or]: [
    //     { member_id: 1 },
    //   ]
    // })

    // await queryInterface.bulkDelete('members', {
    //   [Op.or]: [
    //     { email: 'admin@admin.com' },
    //   ]
    // })

  }
};
