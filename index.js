
const express = require('express');
const distanceCalculator = require('./distance_calculator');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello nodejs'));
app.get('/api/test', (req, res) => res.send('Test nodejs'));

console.log(distanceCalculator.distance(5, 10));
app.listen(port);
