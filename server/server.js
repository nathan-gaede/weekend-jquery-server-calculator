//Bring express into project
//npm init --yes and npm install express first.

const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

app.use(express.static('server/public'));

const mathInputs = [];

app.listen(port, () => {
    console.log('Listening on port', port);
});

