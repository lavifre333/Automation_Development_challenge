const axios = require('axios');

// Defined a function that make a request to a API server url and receive the server response.
async function makeRequest(url) {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}
// Read and save the entities from the data json file.
const bookEntities = require('./Data/books_list.json');

// Test the first response from the API server
describe('REST API', () => {
    it('returns a list of entities', async () => {
        firstResponse = await makeRequest('http://localhost:3000/entities');
        global.firstResponseEntities = firstResponse.data;
         // Check that the response from the API server contains the expected entities.
        for (index in bookEntities){
            expect(firstResponseEntities).toContainEqual(bookEntities[index]);
        }
    });
});

// Make a second request to the API server and check if the values of the second response match the values of the first response.
describe('REST API,  make a second request', () => {
    it('the entities properties in the second request match the first request entitis properties', async () => {
        const secondResponse = await makeRequest('http://localhost:3000/entities');
        const secondResponseEntities = secondResponse.data;
        firstResponseEntities.forEach((entity, index) => {
            expect(entity).toEqual(secondResponseEntities[index]);
        });
    });
});
  