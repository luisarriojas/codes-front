const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/codes-front'));
app.get('/*', (req, res) =>
    res.sendFile('index.html'),
);

app.listen(process.env.PORT || 8080);