

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;

const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(bodyParser.json());


console.log("Hello Word");

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});