const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subclass: {
    type: DataTypes.STRING,
    allowNull: true
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false
  },
  armorClass: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  hitPoints: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  abilityScores: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
  },
  
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'Character'
});

module.exports = Character;

