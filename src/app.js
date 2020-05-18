const express = require('express');
const app = express();
const port = 4242;

app.get('/', function (req, res) {
    res.send("Hello World");
})

module.exports = app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
