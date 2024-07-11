

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoutes = require('./routes/appRoutes')

const PORT = 5000;

const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(bodyParser.json());

app.use("/",appRoutes);

console.log("Hello World");

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});