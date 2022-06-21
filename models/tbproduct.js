"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbProduct.belongsTo(models.tbKategory, {
        as: "tbKategory",
        foreignKey: "id",
      });
      
      // tbProduct.hasOne(models.tbGalery, {
      //   as: "tbGalery",
      //   foreignKey: "gambarGalery",
      // });
    }
  }
  tbProduct.init(
    {
      namaPr: DataTypes.STRING,
      hargaPr: DataTypes.STRING,
      ukuranPr: DataTypes.STRING,
      gambarPr: DataTypes.STRING,
      idKate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbProduct",
    }
  );
  return tbProduct;
};
