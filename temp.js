
async function getBusLocations(){
    const url= 'https://api-v3.mbta.com/vehicles?filter[route]=57&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.ritekit.com/v1/emoji/suggestions?text=Why%20robots%20may%20soon%20steal%20all%20manufacturing%20jobs%20%E2%80%93%20but%20it%E2%80%99s%20not%20all%20bad%20news&client_id=8c9c3bdd0dd47815a8eebef91b9711a042c28c7a2b1d", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


async function getEmoji(){
  const url= "https://api.ritekit.com/v1/emoji/suggestions?text=Why%20robots%20may%20soon%20steal%20all%20manufacturing%20jobs%20%E2%80%93%20but%20it%E2%80%99s%20not%20all%20bad%20news&client_id=8c9c3bdd0dd47815a8eebef91b9711a042c28c7a2b1d";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json)
  return json.data
}

getEmoji()

async function getEmoji(){
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  const url= "https://api.ritekit.com/v1/emoji/suggestions?text=Why%20robots%20may%20soon%20steal%20all%20manufacturing%20jobs%20%E2%80%93%20but%20it%E2%80%99s%20not%20all%20bad%20news&client_id=8c9c3bdd0dd47815a8eebef91b9711a042c28c7a2b1d";
  const response = await fetch(url, requestOptions)
  //.then(response => response.text())
  //.then(result => console.log(result))
  //.catch(error => console.log('error', error));
const json = await response.json();
console.log(json)
return json.data
}

getEmoji()

console.log('about to fetch something...');
fetch('rainbow.jpg')
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob=>{
        console.log(blob);
        document.getElementById('rainbow').src = URL.createObjectURL(blob);
    })
