'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const user = 
    [
      {
        "id": 1,
        "userName": "HafizhNL",
        "email": "hafizh@gmail.com",
        "password": "HNL25"
      },
      {
        "id": 2,
        "userName": "Budi",
        "email": "budi@gmail.com",
        "password": "Budiyanto"
      }
    ]

    const category =
    [
      {
        "id": 1,
        "name": "SmartPhones"
      },
      {
        "id": 2,
        "name": "Tablets"
      },
      {
        "id": 3,
        "name": "Watches"
      }
    ]

    
    const product =
    [
      {
        "id": 1,
        "name": "Samsung Note20",
        "imgUrl": "https://images.samsung.com/is/image/samsung/levant-galaxy-note20-ultra-n985-sm-n985fzngmid-frontmysticbronze-319627588?$650_519_PNG$",
        "memory": "8GB RAM",
        "storage": "256GB internal storage",
        "batteryCapacity": "4170mAh",
        "description": "The Samsung Galaxy Note20 is a powerful smartphone with an S Pen, large display, and advanced productivity features.",
        "price": 15000000,
        "CategoryId": 1,
        "UserId": 2
      },
      {
        "id": 2,
        "name": "Samsung Galaxy S21",
        "imgUrl": "https://images.samsung.com/is/image/samsung/p6pim/id/sm-g990elgixid/gallery/id-galaxy-s21-fe-g990-sm-g990elgixid-530620894?$650_519_PNG$",
        "memory": "8GB RAM",
        "storage": "128GB internal storage",
        "batteryCapacity": "4000mAh",
        "description": "The Samsung Galaxy S21 is a flagship smartphone with a powerful camera, stunning display, and advanced features.",
        "price": 14000000,
        "CategoryId": 1,
        "UserId": 1
      },
      {
        "id": 3,
        "name": "Samsung Galaxy Tab S7",
        "imgUrl": "https://images.samsung.com/is/image/samsung/id/galaxy-note20/gallery/id-galaxy-tab-s7-t875-sm-t875nzkaxid-frontmysticblack-278581902?$650_519_PNG$",
        "memory": "6GB RAM",
        "storage": "128GB internal storage",
        "batteryCapacity": "8000mAh",
        "description": "The Samsung Galaxy Tab S7 is a high-performance tablet with a vibrant display, S Pen support, and long-lasting battery life.",
        "price": 11000000,
        "CategoryId": 2,
        "UserId": 1
      }
    ]

    const dataUser = user.map((item) => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
      return item
    })

    const dataCategory = category.map((item) => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
      return item
    })

    const dataProduct = product.map((item) => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
      return item
    })

    await queryInterface.bulkInsert("Users", dataUser, {})
    await queryInterface.bulkInsert("Categories", dataCategory, {})
    await queryInterface.bulkInsert("Products", dataProduct, {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
    await queryInterface.bulkDelete("Categories", null, {})
    await queryInterface.bulkDelete("Products", null, {})
  }
};
