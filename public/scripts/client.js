console.log('client.js sourced');

$(document).ready(readyNow)

function readyNow() {
    console.log('readyNow');
    $('#calculate').on('click', sendMathToServer);
}

function sendMathToServer() {
    console.log('in sendMathToServer');
}

