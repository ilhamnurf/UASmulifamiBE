"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbPesanans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPr: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "tbProducts",
          key: "id",
          as: "PrId",
        },
      },
      idUser: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "tbUsers",
          key: "id",
          as: "UserId",
        },
      },
      paymentDate: {
        type: Sequelize.DATE,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      statusPes: {
        type: Sequelize.ENUM("dibayar", "belumDibayar"),
      },
      hargaPes: {
        type: Sequelize.STRING,
      },
      jenisPes: {
        type: Sequelize.ENUM("available", "custom"),
      },
      ukuranCus: {
        type: Sequelize.STRING,
      },
      gambarCus: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbPesanans");
  },
};
