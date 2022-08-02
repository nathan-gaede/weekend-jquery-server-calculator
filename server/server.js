//Bring express into project
//npm init --yes and npm install express first.

const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

let mathInputs = {};
const returnBundle = [];

app.use(express.static('public'));
app.use(express.urlencoded());



app.post('/math', (req, res) => {
    //const = result = req.body;
    console.log(req.body);
    mathInputs = req.body;
    //mathInputs.push(mathInputs);
    res.sendStatus(201);

});

app.get('/retrieve', (req, res) => {
    res.send(mathInputs);
    calculateInputs();
    
});

function calculateInputs() {
    // console.log('in calculateInputs');
    // console.log(mathInputs.first);
    // console.log(mathInputs.second);
    // console.log(mathInputs.operator);
    let firstNumber = Number(mathInputs.first);
    let secondNumber = Number(mathInputs.second);
    if (mathInputs.operator === '+') {
       returnBundle.push((firstNumber) + (secondNumber));
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(returnBundle);


}



app.listen(port, () => {
    console.log('Listening on port', port);
});

