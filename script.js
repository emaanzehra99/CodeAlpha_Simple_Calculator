function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error!";
    }
}