const User = require('./User');
const Character = require('./character');

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

// add character equipment relationships

module.exports = { User, Character };