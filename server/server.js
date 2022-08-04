//Bring express into project
//npm init --yes and npm install express first.

const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

let mathInputs = {};
const returnBundle = {};
const history = [];
app.use(express.static('public'));
app.use(express.urlencoded());



app.post('/math', (req, res) => {
    //const = result = req.body;

    //console.log(req.body);
    mathInputs = req.body;
    calculateInputs();
    history.push({
        firstNumber:returnBundle.firstNumber,
        operator:returnBundle.operator,
        secondNumber:returnBundle.secondNumber,
        result:returnBundle.result 
    });
    //mathInputs.push(mathInputs);
    res.sendStatus(201);

});

app.get('/retrieve', (req, res) => {
    calculateInputs();
    res.send(returnBundle);
    
});

app.get('/history', (req, res) => {
    console.log('get history');
    res.send(history);

})

function calculateInputs() {
    
    let firstNumber = Number(mathInputs.first);
    let secondNumber = Number(mathInputs.second);
    let chosenOperator = (mathInputs.operator);
    if (mathInputs.operator === '+') {
        
        returnBundle.firstNumber = firstNumber;
        returnBundle.operator = chosenOperator;
        returnBundle.secondNumber = secondNumber;
        returnBundle.result = firstNumber + secondNumber;
        
        }
    else if (mathInputs.operator === '-') {
        returnBundle.firstNumber = firstNumber;
        returnBundle.operator = chosenOperator;
        returnBundle.secondNumber = secondNumber;
        returnBundle.result = firstNumber - secondNumber;
        }
    else if (mathInputs.operator === '*') {
        returnBundle.firstNumber = firstNumber;
        returnBundle.operator = chosenOperator;
        returnBundle.secondNumber = secondNumber;
        returnBundle.result = firstNumber * secondNumber;
        }
    else if (mathInputs.operator === '/') {
        returnBundle.firstNumber = firstNumber;
        returnBundle.operator = chosenOperator;
        returnBundle.secondNumber = secondNumber;
        returnBundle.result = firstNumber / secondNumber;
        }
    console.log(returnBundle);    
}




app.listen(port, () => {
    console.log('Listening on port', port);
});

