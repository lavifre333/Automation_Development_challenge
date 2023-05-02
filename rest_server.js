const express = require('express')
const app = express()
const port = 3000

app.get('/entities', (req, res) => {
    // Read the content of the jeson file
    const books_store_data = require('./Data/books_list.json')
    // Send a Jeson response to the client
    res.json(books_store_data)
})

app.listen(port, () => {
    console.log(`the REST server listening on  http://localhost:${port}/entities`)
})