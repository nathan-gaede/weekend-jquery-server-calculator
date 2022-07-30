//Bring express into project
//npm init --yes and npm install express first.

const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

const mathInputs = [];

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/math', (req, res) => {
    res.send(mathInputs);
});

app.post('/math', (req, res) => {
    //const = result = req.body;
    console.log(req.body);
    const result = req.body;
    mathInputs.push(result);
    res.sendStatus(201);

});

app.listen(port, () => {
    console.log('Listening on port', port);
});

