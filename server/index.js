const express = require('express');
const app = express();
const port = 8080;
const parser = require('body-parser');


app.use(parser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('Listening on port 8080');
})