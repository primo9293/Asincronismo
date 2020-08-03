const fetchData1 = require('../utils/fetchData');
const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction1 = async(url_api) => {
    try {
        const data = await fetchData1(url_api);
        const character = await fetchData1(`${API}${data.results[0].id}`);
        const origin = await fetchData1(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.log(error);
    }
}


console.log('Before');
anotherFunction1(API);
console.log('After');