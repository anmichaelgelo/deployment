const express = require('express');
const app = express();

// Config
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World 2022')
});

app.listen(process.env.PORT, () => console.log("Connected to port " + process.env.PORT))

module.exports = app;