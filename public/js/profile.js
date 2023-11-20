const deleteCharacterHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/characters/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete character');
        }
    }
};

document
    .querySelector('.delete-character')
    .addEventListener('click', deleteCharacterHandler);