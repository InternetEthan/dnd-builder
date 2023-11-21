const Chance = require('chance');

// Instantiate Chance so it can be used
const chance = new Chance();

module.exports = {
    d4: () => chance.integer({ min: 1, max: 4 }),
    d6: () => chance.integer({ min: 1, max: 6 }),
    d8: () => chance.integer({ min: 1, max: 8 }),
    d10: () => chance.integer({ min: 1, max: 10 }),
    d12: () => chance.integer({ min: 1, max: 12 }),
    d20: () => chance.integer({ min: 1, max: 20 }),
    d100: () => chance.integer({ min: 1, max: 100 }),
    abilityScoreRoll: () => {
        let rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(chance.d6());
            console.log(rolls[i]);
        }
        rolls.sort((a, b) => a - b);
        console.log(rolls);
        rolls.shift(); // Drop the lowest roll
        console.log(rolls);
        return rolls.reduce((a, b) => a + b);
    }
};

console.log(module.exports.abilityScoreRoll());