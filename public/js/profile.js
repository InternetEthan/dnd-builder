/* 
- Add code to handle delete button to delete character.
*/

const createCharacterHandler = async (event) => {
    event.preventDefault();
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/characters/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            document.location.replace('/profile');
            alert('You have deleted a character');
        } else {
            alert('Failed to delete a character');
        };
    }
};

document.querySelector(`.character-list`).addEventListener('click', delButtonHandler);
