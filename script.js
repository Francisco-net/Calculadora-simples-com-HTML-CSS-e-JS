const display = document.getElementById('display');

function appendToDisplay(input){
    const display = document.getElementById('display');
    display.value += input;
}

function resetDisplay(){
    const display = document.getElementById('display');
    display.value = " ";
}



function calcular(){
    const display = document.getElementById('display');

    try {
        display.value = eval(display.value);
    } catch (Error) {
        display.value = 'Error'
    }
}

function calcFatorial(op) {
    const display = document.getElementById('display');
    if (op == '!') {
        const num = display.value;
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        display.value = result;

    }else{
        calcular()
    }
}