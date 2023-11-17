// fetch api data

module.exports = {
    
    api_fetch: (apireq) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        return fetch(`https://www.dnd5eapi.co/api/classes/${apireq}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                JSON.parse(result);
            })
        .catch(error => console.log('error', error));
    }
}