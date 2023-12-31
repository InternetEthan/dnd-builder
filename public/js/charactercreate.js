const characterFormHandler = async (event) => {
  event.preventDefault();

    // Collect values from the character form
    const charName = document.querySelector('#character-name').value.trim();
    const charRace = document.querySelector('#character-race').value.trim();
    const charClass = document.querySelector('#character-class').value.trim();
    const strength = document.querySelector('#strength').value.trim();
    const dexterity = document.querySelector('#dexterity').value.trim();
    const constitution = document.querySelector('#constitution').value.trim();
    const intelligence = document.querySelector('#intelligence').value.trim();
    const wisdom = document.querySelector('#wisdom').value.trim();
    const charisma = document.querySelector('#charisma').value.trim();
    const charPortrait = "/assets/" + document.querySelector('input[name="portrait"]:checked').value;

    const ability_score = { strength, dexterity, constitution, intelligence, wisdom, charisma };

    if (charName && charRace && charClass && strength && dexterity && constitution && intelligence && wisdom && charisma) {
  
      // Send a POST request to the API endpoint
      const response = await fetch('/api/characters', {
        method: 'POST',
        body: JSON.stringify({ name: charName, race: charRace, class: charClass, ability_score, portrait: charPortrait }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
        console.log("success")
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.character-form')
  .addEventListener('submit', characterFormHandler);
    