
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Character = sequelize.define('Character', {
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
  }
});

module.exports = Character;
