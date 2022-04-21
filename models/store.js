'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product)
      this.belongsTo(models.User)
    }
  }
  Store.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    code: DataTypes.STRING,
    since: DataTypes.DATE,
    UserId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};