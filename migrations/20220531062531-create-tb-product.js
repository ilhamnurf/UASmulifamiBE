'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaPr: {
        type: Sequelize.STRING
      },
      hargaPr: {
        type: Sequelize.STRING
      },
      ukuranPr: {
        type: Sequelize.STRING
      },
      gambarPr: {
        type: Sequelize.STRING
        
      },
      idKate: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete:"CASCADE",
        references: {
          model: "tbKategories",
          key: "id",
          as: "KateId",
      }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbProducts');
  }
};