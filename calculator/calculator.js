const display = document.getElementsByClassName("display")[0];
function appendTodisplay(input){
    display.value += input;
}
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function clearDisplay(){
    display.value = "";
}
function clear1(){
    display.value=display.value.toString().slice(0,-1);
}