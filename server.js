const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));