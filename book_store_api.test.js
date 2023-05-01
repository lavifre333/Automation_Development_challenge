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
//receive and save the entities from the data json file
const data = require('./Data/books_list.json');

// Test the first response from the API server
describe('REST API', () => {
    it('returns a list of entities', async () => {
        response_1 = await makeRequest('http://localhost:3000/entities');
        global.entities_from_first_response = response_1.data;
        // Check the response from the API server contain the expected entities.
        for (entity in entities_from_first_response){
            expect(entities_from_first_response).toContainEqual(data[entity]);
        }
    });
});

//Make a second request for the API server and check if the values of the secound response match the values of the first response.
describe('REST API,  make a second request', () => {
    it('the entities properties in the second request match the first request entitis properties', async () => {
        const response_2 = await makeRequest('http://localhost:3000/entities');
        const entities_from_response2 = response_2.data;
        for (entity in entities_from_response2){
            expect(entities_from_response2[entity]).toEqual(entities_from_first_response[entity]);
        }
    });
});
  