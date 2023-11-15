const characterFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the character form
    const charName = document.querySelector('#character-name').value.trim();
    const charRace = document.querySelector('#character-race').value.trim();
    const charClass = document.querySelector('#character-name').value.trim();
    const charAbilityScores = document.querySelector('#character-race').value.trim();
    

    if (charName && charRace && charClass && charAbilityScores) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
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
    }
  };
  
  const abilityScoreButtonHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
document
    .querySelector('.character-form')
    .addEventListener('submit', characterFormHandler);
    
document
    .querySelector('.ability-score')
    .addEventListener('click', abilityScoreButtonHandler);