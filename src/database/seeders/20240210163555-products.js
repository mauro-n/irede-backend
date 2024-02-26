'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      title: 'Camisas Serenity Lumina Elegante',
      qtd_stock: 30,
      base_price: 180.00,
      description: 'e-rede',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirts1.jpeg',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 2,
      title: 'Camisetas Aurora Nova Essência Vibrante',
      qtd_stock: 25,
      base_price: 70.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirts2.jpeg',
    }, {
      id: 3,
      title: 'Moletons Celestiais Alvorada Confortável',
      qtd_stock: 25,
      base_price: 150.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirts3.jpeg',
    }, {
      id: 4,
      title: 'Blusas Harmonia Aconchegante',
      qtd_stock: 25,
      base_price: 100.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirts4.jpeg',
    }, {
      id: 5,
      title: 'Jaquetas Brisa EcoFusion Leve',
      qtd_stock: 25,
      base_price: 200.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shirts1.jpeg',
    }, {
      id: 6,
      title: 'Tênis Nimbus Lumina Elegante',
      qtd_stock: 25,
      base_price: 180,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shoe1.jpeg',
    }, {
      id: 7,
      title: 'Sandálias Aurora Nova Essência Vibrante',
      qtd_stock: 25,
      base_price: 70.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal1-min.jpeg',
    }, {
      id: 8,
      title: 'Botas Celestiais Alvorada Confortável',
      qtd_stock: 25,
      base_price: 150.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/boot1-min.jpeg'
    }, {
      id: 9,
      title: 'Chinelos Harmonia Sussurros Aconchegantes',
      qtd_stock: 25,
      base_price: 100.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal2-min.jpeg',
    }, {
      id: 10,
      title: 'Sapatos Brisa EcoFusion Leve',
      qtd_stock: 25,
      base_price: 200.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shoe2.jpeg',
    }, {
      id: 11,
      title: 'Sapatênis Cosmos Infinity Urbano',
      qtd_stock: 25,
      base_price: 120.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shoe3.jpeg',
    }, {
      id: 12,
      title: 'Mocassins Serenata Lua Cheia Encantadora',
      qtd_stock: 25,
      base_price: 190.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/shoe4.jpeg',
    }, {
      id: 13,
      title: 'Espadrilles Dália Pétalas Delicadas',
      qtd_stock: 25,
      base_price: 82.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal2.jpeg'
    }, {
      id: 14,
      title: 'Pantufas Oásis Solstício Fresco',
      qtd_stock: 25,
      base_price: 50.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal3.jpeg'
    }, {
      id: 15,
      title: 'Botinas Serendipity Aventura Quente',
      qtd_stock: 25,
      base_price: 130.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/sandal4.jpeg'
    }, {
      id: 16,
      title: 'Bolsa Brisa EcoFusion Leve',
      qtd_stock: 25,
      base_price: 70.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag7-min.jpeg'
    }, {
      id: 17,
      title: 'Bolsa Cosmos Infinity Urbano',
      qtd_stock: 25,
      base_price: 99.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag6-min.jpeg'
    }, {
      id: 18,
      title: 'Bolsa Serenata Lua Cheia Encantadora',
      qtd_stock: 25,
      base_price: 60.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag5-min.jpeg'
    }, {
      id: 19,
      title: 'Bolsas Dália Pétalas Delicadas',
      qtd_stock: 25,
      base_price: 200.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag1-min.jpeg'
    }, {
      id: 20,
      title: 'Bolsa Oásis Solstício Fresco',
      qtd_stock: 25,
      base_price: 110.90,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag2-min.jpeg'
    }, {
      id: 21,
      title: 'Bolsa Aurora Lumina Elegante',
      qtd_stock: 25,
      base_price: 150.00,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag3-min.jpeg'
    }, {
      id: 22,
      title: 'Bolsa Serenity Nova Essência Vibrante',
      qtd_stock: 25,
      base_price: 33.30,
      description: 'e-rede',
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
      img: 'https://irede-ecommerce.s3.amazonaws.com/products/bag4-min.jpeg'
    }], {});

    await queryInterface.bulkInsert('category_product', [{
      id: 1,
      category_id: 6,
      product_id: 1,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 2,
      category_id: 6,
      product_id: 2,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 3,
      category_id: 6,
      product_id: 3,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 4,
      category_id: 6,
      product_id: 4,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 5,
      category_id: 6,
      product_id: 5,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 6,
      category_id: 4,
      product_id: 6,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 7,
      category_id: 5,
      product_id: 7,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 8,
      category_id: 3,
      product_id: 8,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 9,
      category_id: 5,
      product_id: 9,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 10,
      category_id: 4,
      product_id: 10,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 11,
      category_id: 4,
      product_id: 11,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 12,
      category_id: 4,
      product_id: 12,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 13,
      category_id: 5,
      product_id: 13,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 14,
      category_id: 5,
      product_id: 14,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 15,
      category_id: 3,
      product_id: 15,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 16,
      category_id: 2,
      product_id: 16,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 17,
      category_id: 2,
      product_id: 17,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 18,
      category_id: 2,
      product_id: 18,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 19,
      category_id: 2,
      product_id: 19,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 20,
      category_id: 2,
      product_id: 20,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 21,
      category_id: 2,
      product_id: 21,
      created_at: '1999-01-08',
      updated_at: '1999-01-08',
    }, {
      id: 22,
      category_id: 2,
      product_id: 22,
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
