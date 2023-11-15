var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.dnd5eapi.co/api/classes/bard", requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result)))
  .catch(error => console.log('error', error));