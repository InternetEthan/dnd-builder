const rng = require('rng')

const characterFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the character form
    const charName = document.querySelector('#character-name').value.trim();
    const charRace = document.querySelector('#character-race').value.trim();
    const charClass = document.querySelector('#character-class').value.trim();
    const abilityScores = document.querySelector('#ability-scores').value.trim();
    

    if (charName && charRace && charClass && abilityScores) {
      
      charAbilityScores = setAbilityScore(abilityScores.value);
      // Send a POST request to the API endpoint
      }
      const response = await fetch('/api/characters/new-character', {
        method: 'POST',
        body: JSON.stringify({ charName, charRace, charClass, charAbilityScores}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
};

function setAbilityScore(abilityScoresChoice, classChoice) {
    const abilityScores = []
    switch(choice.value) {
        case 'random':
            for (let i = 0; i < 7; i++) {
                abilityScoresChoice += Math.random() * (20 - 1) + 1;
            } ;
        case 'recommended':
            // choose ability scores based on selected class 
    return abilityScores
    }
};
  
document
    .querySelector('.character-form')
    .addEventListener('submit', characterFormHandler);
    