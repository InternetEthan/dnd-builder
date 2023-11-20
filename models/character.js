const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model {}

Characters.init(
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ability_score: {
    type: DataTypes.JSON,
    allowNull: false,
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'characters'
}
);

module.exports = Characters;

