console.log('client.js sourced');

$(document).ready(readyNow)

function readyNow() {
    console.log('readyNow');
    $('#add-number').on('click', addButton);
    $('#subtract-number').on('click', minusButton);
    $('#multiply-number').on('click', multiplyButton);
    $('#divide-number').on('click', divideButton);
    $('#calculate').on('click', packageObject);
    calcHistory();
}

let inputData = {};
let selectedOperator = {};
const resultHistory = [];

function packageObject() {
    inputData.first = $('#first-input').val();
    inputData.second = $('#second-input').val();
    //console.log('in packageObject');
    //console.log(inputData);
    $.extend(inputData, selectedOperator);
    sendMathToServer();
    getResultsFromServer();

    

}

function addButton() {
    //console.log('in addButton');
    selectedOperator.operator = '+';
    //console.log(selectedOperator);
    
}

function minusButton() {
    //console.log('in minusButton');
    selectedOperator.operator = '-';
    //console.log(selectedOperator);
}

function multiplyButton() {
    //console.log('in multiplyButton');
    selectedOperator.operator = '*';
    //console.log(selectedOperator);

}

function divideButton() {
    //console.log('in divideButton');
    selectedOperator.operator = '/';
    //console.log(selectedOperator);
}

function sendMathToServer() {
    //console.log('in sendMathToServer');
    //post can do the calculation
    $.ajax({
        type: 'POST',
        url: '/math',
        data: inputData

        }).then(function(response){
            //console.log('success');
        })
}

function getResultsFromServer() {
    //console.log('in getResultsFromServer');
    $.ajax({
        type: 'GET',
        url: '/retrieve',

    }).then(function(response){
        //console.log('retrieved');
        //console.log('display returned object', response);
        $('#result-container').append(`
            <tr>
                <td>${response.firstNumber}</td>
                <td>${response.operator}</td>
                <td>${response.secondNumber}</td>
                <td>${response.result}</td>
            </tr>
        `);
        $('input').val('');
        
        
        //console.log(response.firstNumber);
        //resultHistory.push(response);
        //console.log(resultHistory);
        
        //console.log(response);
    });

}
//Key function that should make sense
function calcHistory() {
    //console.log('in calcHistory');
    $.ajax({
        type: 'GET',
        url: '/history',


    }).then(function(response){
        console.log(response);
        for (let result of response) {
            $('#result-container').append(`
            <tr>
                <td>${result.firstNumber}</td>
                <td>${result.operator}</td>
                <td>${result.secondNumber}</td>
                <td>${result.result}</td>
            </tr>
        `);
        }
        
        

    });
}











