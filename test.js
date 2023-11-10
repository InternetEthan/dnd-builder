var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.dnd5eapi.co/api/monsters/goblin", requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result).armor_class[0].value))
  .catch(error => console.log('error', error));

