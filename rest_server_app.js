const express = require('express')
const app = express()
const port = 3000

app.get('/entities', (req, res) => {
    // Retrieve the content of the books_list.json file at the Data directory
    const books_store_data = require('./Data/books_list.json')
    // Send the content of the books_list.json response to the client
    res.json(books_store_data)
})

app.listen(port, () => {
    console.log(`the REST server listening on  http://localhost:${port}/entities`)
})