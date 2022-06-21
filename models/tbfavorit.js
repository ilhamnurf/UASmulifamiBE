"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbFavorit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbFavorit.belongsTo(models.tbProduct, {
        as: "tbProduct",
        foreignKey: "id",
      });
      tbFavorit.belongsTo(models.tbUser, {
        as: "tbUser",
        foreignKey: "id",
      });
    }
  }
  tbFavorit.init(
    {
      idPr: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbFavorit",
    }
  );
  return tbFavorit;
};
