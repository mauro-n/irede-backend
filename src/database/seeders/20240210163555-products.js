'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      title: 'Nique Air Supra',
      qtd_stock: 30,
      base_price: 65.99,
      description: 'O original da marca mais famosa de calçados em um preço que cabe no seu bolso.',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 2,
      title: 'Blusa Lactose',
      qtd_stock: 25,
      base_price: 29.90,
      description: 'Blusa com estilo para quem gosta de estilo.',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }], {});

    await queryInterface.bulkInsert('category_product', [{
      id: 1,
      category_id: 1,
      product_id: 1,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 2,
      category_id: 1,
      product_id: 2,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('category_product', {
      [Op.or]: [
        { product_id: 1 },
        { product_id: 2 }
      ]
    })
    await queryInterface.bulkDelete('products', {
      [Op.or]: [
        { title: 'Nique Air Supra' }
      ]
    })
  }
};
