# Automation_Development_challenge

In this project, we will set a REST API server with node.js and express.
Test the response of the REST server with a Jest test file

# Install node.js.

To run the project make sure you have node.js installed over the work environment.
If not here is a link to the official node website with a simple guide for how to install node.js over your work environment: https://nodejs.org/en/download/package-manager

# Run the REST server with node.

We have a simple node.js app that runs a REST server locally.
The REST server app takes a book list json file called "books_list".json under the Data directory and sends it as a response to clients requests.


To start the app run the following command:
```sh
node rest_server.js
```
Then the app should run over http://localhost:3000/entities


# Run test for the REST server with jest.

After running the REST server we can test his response.
In the project, we have a test file rest_server.test.js that uses the Jest and Axios models to check the responses from our REST server.
The test composes of two parts:
* Part one - check if the response from the REST API server includes the same entities as the books_list.json file in the Data directory.
* Part two - make a second request for the REST API server and check if the entities properties of the second response match the first response entities' properties.


To run the test open a new terminal window and run the following command:


```sh
npm test
```
after running this command you should receive the following output:


