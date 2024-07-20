/* Using onclick */
function toDisplay(value){
    document.getElementById('display').value += value;
}

function back(value){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculateResult(){
    let resDisplay = document.getElementById('display');
    try{
        resDisplay.value = eval(resDisplay.value);
    }catch(error){
        resDisplay.value = 'Error';
    }
}



/* Using event listener */
// let string = "";
// let input = document.getElementById('display');
// let buttons = document.querySelectorAll('.btn');

// let arr = Array.from(buttons);
// arr.forEach(function(button){
//     button.addEventListener('click', function(e){
//         if (e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if (e.target.innerHTML == "AC"){
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTML == "Back"){
//             // string = string.substring(0, string.length-1);
//             string = string.slice(0, -1);
//             input.value = string;
//         }
//         // else if (Error){
//         //     string = 'error';
//         //     input.value = string;
//         // }
//         else{
//             string = string + e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })