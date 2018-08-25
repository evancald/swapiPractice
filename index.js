const axios = require('axios');


function getPersonData(personId) {
return axios.get(`https://swapi.co/api/people/${personId}`)
  .then((response) => {
    const person = response.data;
    
    const newObj = {
      name: response.data.name,
      height: response.data.height,
      gender: response.data.gender,
      skinColor: response.data.skin_color,
      eyeColor: response.data.eye_color,
      hairColor: response.data.hair_color
    };

    return newObj;
  })
  .catch((error) => {
    console.log(error.response.status, error.response.statusText);
  })
}

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Promise.all(ids.map((id) => {
  return getPersonData(id);
}))
.then((dataArr) => {
  // We will be working here
  console.log(dataArr)

  //log a new arr of just the names *hint use .map
  const namesArr = dataArr.map((person) => {
    return person.name;
  });
  console.log(namesArr);

  //log a new arr, that has all names that include 'b' or 'B' filtered out
  const noBNames = namesArr.filter((person) => {
    name = person.toLowerCase();
    return !(name.includes('b'));
  }) 
  console.log(noBNames);

  //log a new arr, with all heights less than 180 filtered out
  const tallPeople = dataArr.filter((person) => {
    return person.height > 180;
  })
  console.log(tallPeople);
  
  //log a new arr, with all items (sorted by name) in (alphabetical order)
  const alphabetizedNames = namesArr.sort()
  console.log(alphabetizedNames);

  //log a new arr, with all items (sorted by height) from (least to greatest)
  const shortestToTallest = dataArr.sort((personA, personB) => {
    return personA.height - personB.height;
  })
  console.log(shortestToTallest);

  //log a statistics object with the following keys and values. Do not include duplicates

  function unique(arr) {
    let seen = {};
    return arr.filter((item) => {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  dataArrStats = {
    count: dataArr.length,
    names: dataArr.map((person) => {return person.name}),
    eyeColors: unique(dataArr.map((person) => {return person.eyeColor}).sort()),
    harColors: unique(dataArr.map((person) => { return person.hairColor}).sort())
  }
  console.log(dataArrStats);

})


/*
function getPlanetData(planet) {
  axios.get(`https://swapi.co/api/planets/${planet}`)
  .then((response) => {
    const planet = response.data;
    console.log(planet.name);
  })
  .catch((error) => {
    console.log(error.response.status, error.response.statusText);
  })
}

getPlanetData(1);

*/