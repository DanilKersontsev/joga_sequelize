'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name:'Ashley Galvin',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name:'Patrick Beach',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name:'MacKenzie Miller',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};