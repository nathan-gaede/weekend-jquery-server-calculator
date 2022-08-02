//Bring express into project
//npm init --yes and npm install express first.

const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

let mathInputs = {};
const returnBundle = {};

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
    calculateInputs();
    res.send(returnBundle);
    
});

function calculateInputs() {
    
    let firstNumber = Number(mathInputs.first);
    let secondNumber = Number(mathInputs.second);
    if (mathInputs.operator === '+') {
        
        returnBundle.firstNumber = firstNumber;
        returnBundle.secondNumber = secondNumber;
        returnBundle.result = firstNumber + secondNumber;
        //returnBundle.push(returnBundle.firstNumber, + returnBundle.secondNumber, returnBundle.result);
        console.log(returnBundle);
    }
    
    
}



app.listen(port, () => {
    console.log('Listening on port', port);
});

