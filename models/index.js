const User = require('./User');
const Character = require('./character');

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });


module.exports = { User, Character };