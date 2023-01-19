"use strict";

const { hashPassword } = require('../helpers/bcrypt');

const list = [
  {
    username: "surya",
    email: "surya@mail.com",
    password: "surya"
  },
  {
    username: "aji",
    email: "aji@mail.com",
    password: "aji"
  }
]

list.forEach(el => {
  el.password = hashPassword(el.password)
  el.createdAt = new Date()
  el.updatedAt = new Date()
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", list, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
