// Calculator Program 

const display = document.getElementById("display");

//To display values.

function appendDisplay(input) {
    display.value += input;
}

//To calculate results and to generate an error if user enters incomplete value and hit '='.

function calcResult() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Try Again!"
    }
}

//To clear Display.

function clearDisplay() {
    display.value = "";
}
