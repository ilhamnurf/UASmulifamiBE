'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbPesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbPesanan.init({
    idPr: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    keterangan: DataTypes.STRING,
    statusPes: DataTypes.ENUM("dibayar", "belumDibayar"),
    hargaPes: DataTypes.STRING,
    jenisPes: DataTypes.ENUM("available", "custom"),
    ukuranCus: DataTypes.STRING,
    gambarCus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbPesanan',
  });
  return tbPesanan;
};