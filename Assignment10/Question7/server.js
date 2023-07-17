const express = require('express');
const app = express();
const PORT = 8081;

const generateRandom = () => {
    return Math.floor(Math.random() * 100);
}

app.get('/random', (req, res) => {
    res.status(200).json({
        random: generateRandom()
    });
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})