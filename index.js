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
        hairColor: response.data.hair_color,
      };

      return newObj;
    })
    .catch((error) => {
      console.log(error.response.status, error.response.statusText);
    });
}

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Promise.all(ids.map((id) => { return getPersonData(id); }))
  .then((dataArr) => {
  // We will be working here
    console.log('Full data array');
    console.log(dataArr);

    // log a new arr of just the names *hint use .map
    const namesArr = dataArr.map((person) => person.name);
    console.log('Names Array');
    console.log(namesArr);

    // log a new arr, that has all names that include 'b' or 'B' filtered out
    const noBNames = namesArr.filter((person) => {
      name = person.toLowerCase();
      return !(name.includes('b'));
    });
    console.log('Names with b or B');
    console.log(noBNames);

    // log a new arr, with all heights less than 180 filtered out
    const tallPeople = dataArr.filter((person) => person.height > 180);
    console.log('Tall people over 180cm');
    console.log(tallPeople);

    // log a new arr, with all items (sorted by name) in (alphabetical order)
    const alphabetizedNames = namesArr.sort();
    console.log('Alphabetized names');
    console.log(alphabetizedNames);

    // log a new arr, with all items (sorted by height) from (least to greatest)
    const shortestToTallest = dataArr.sort((personA, personB) => personA.height - personB.height);
    console.log('Shortest to Tallest');
    console.log(shortestToTallest);

    // log a statistics object with the following keys and values. Do not include duplicates

    function unique(arr) {
      const seen = {};
      return arr.filter((item) => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    }

    dataArrStats = {
      count: dataArr.length,
      names: dataArr.map((person) => person.name),
      eyeColors: unique(dataArr.map((person) => person.eyeColor).sort()),
      harColors: unique(dataArr.map((person) => person.hairColor).sort()),
    };
    console.log('Data Array Stats');
    console.log(dataArrStats);
  });


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
