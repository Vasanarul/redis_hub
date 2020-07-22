const express = require('express');
const app = express();
const port = 2020;
// brew install redis
const redis = require('../db/index.js');

app.get('/', (req, res) => res.send('Redis!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))