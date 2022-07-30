console.log('client.js sourced');

$(document).ready(readyNow)

function readyNow() {
    console.log('readyNow');
    $('#calculate').on('click', sendMathToServer);
}

function sendMathToServer() {
    console.log('in sendMathToServer');
    $.ajax({
        type: 'POST',
        url: '/math',
        data: {
            first: $('#first-input').val(),
            second: $('#second-input').val()
            

            }
        }).then(function(response){
            console.log('success');
        })
}


