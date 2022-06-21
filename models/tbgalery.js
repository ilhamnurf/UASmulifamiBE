"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbGalery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbGalery.belongsTo(models.tbProduct, {
        as: "tbProduct",
        foreignKey: "id",
      });
      // tbGalery.belongsTo(models.tbProduct, {
      //   as: "tbProduct",
      //   foreignKey: "gambarPr",
      // });
    }
  }
  tbGalery.init(
    {
      idPr: DataTypes.INTEGER,
      gambarGalery: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tbGalery",
    }
  );
  return tbGalery;
};
