'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      title: 'Geral',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: ''
    }, {
      id: 2,
      title: 'Acessórios',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/acess-cat.jpeg'
    }, {
      id: 3,
      title: 'Botas',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/boot-cat.jpeg'
    }, {
      id: 4,
      title: 'Tênis',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shoe-cat.jpeg'
    }, {
      id: 5,
      title: 'Sandálias',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal-cat.jpeg'
    }, {
      id: 6,
      title: 'Camisas',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirt-cat.jpeg'
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
