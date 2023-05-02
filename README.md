# Automation_Development_challenge

This project sets up a REST API server using Node.js and Express, and includes a Jest test file for testing the server's responses.

# Prerequisites

Before running the project, make sure that Node.js is installed on your system. If you don't have Node.js installed, please follow the instructions on the official Node.js website for your operating system: https://nodejs.org/en/download/.

# Run the REST server

The Node.js app runs a REST server that responds to client requests. The server retrieves a book list JSON file called "books_list.json" from the Data directory and sends it to clients as a response.

To start the server, navigate to the project's root directory and run the following command in a terminal window:

```sh
node rest_server.js
```
The server should now be running at http://localhost:3000/entities.


Running tests with Jest
The project includes a Jest test file called rest_server.test.js, which uses the Jest and Axios libraries to test the responses from the REST server. The test is divided into two parts:

*Part one: check if the response from the REST API server includes the same entities as the books_list.json file in the Data directory.

*Part two: make a second request to the REST API server and verify that the properties of the entities in the second response match those of the entities in the first response.

To run the test, open a new terminal window and navigate to the project's root directory. Then run the following command:

```sh
npm test
```
After running this command, you should see the test results in the terminal window.


