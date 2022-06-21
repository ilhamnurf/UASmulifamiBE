'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbGaleries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPr: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete:"CASCADE",
        references: {
          model: "tbProducts",
          key: "id",
          as: "PrId",
      }
      },
      gambarGalery: {
        type: Sequelize.STRING,
      //   onUpdate: "CASCADE",
      //   onDelete:"CASCADE",
      //   references: {
      //     model: "tbProducts",
      //     key: "gambarPr",
      //     as: "prGambar",
      // }
      },
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
    await queryInterface.dropTable('tbGaleries');
  }
};