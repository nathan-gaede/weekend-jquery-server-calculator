console.log('client.js sourced');

$(document).ready(readyNow)

function readyNow() {
    console.log('readyNow');
    $('#add-number').on('click', addButton);
    $('#subtract-number').on('click', minusButton);
    $('#multiply-number').on('click', multiplyButton);
    $('#divide-number').on('click', divideButton);
    $('#calculate').on('click', packageObject);
}

let inputData = {};
let selectedOperator = {};

function packageObject() {
    inputData.first = $('#first-input').val();
    inputData.second = $('#second-input').val();
    console.log('in packageObject');
    console.log(inputData);
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
    console.log('in sendMathToServer');
    $.ajax({
        type: 'POST',
        url: '/math',
        data: inputData

        }).then(function(response){
            //console.log('success');
        })
}

function getResultsFromServer () {
    console.log('in getResultsFromServer');
    $.ajax({
        type: 'GET',
        url: '/retrieve',

    }).then(function(response){
        console.log('retrieved');
    })

}



