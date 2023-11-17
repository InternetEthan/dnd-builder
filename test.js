var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const bard = fetch("https://www.dnd5eapi.co/api/classes/bard", requestOptions)
  .then(response => response.text())
  .then(result => {const bard = JSON.parse(result); console.log(bard); return bard})
  .catch(error => console.log('error', error));

console.log(bard.name);

