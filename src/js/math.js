let firstNumber = prompt('Enter Your First Number :');
parseInt(firstNumber);
firstNumber = parseInt(firstNumber);
console.log (firstNumber);

let secondNumber = prompt('Enter Your second Number :');
parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
console.log(secondNumber);

let operator = prompt('Enter Your Operator :');
console.log(operator);

if(operator == '+'){
    console.log(firstNumber + secondNumber);
}else if(operator == '-'){
    console.log(firstNumber - secondNumber);
}else if(operator == '*'){
    console.log(firstNumber * secondNumber);
}else if(operator == '/'){
    console.log(firstNumber / secondNumber);
}else{
    console.log('Please Enter correct operator!');
}
