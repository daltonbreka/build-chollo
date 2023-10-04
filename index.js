const express = require('express');
const app = express();
const port = 80;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

try {

    // Start the server
    app.listen(port, () => {
        console.log("Server is started Successfully")
    });
} catch (error) {
    console.log(error)
}