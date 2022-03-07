
function max_number(numbers){
    let count = 0;
    let maximum = Math.max(...numbers);
    console.log(`Maximum Number is:${maximum}`);
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] == maximum){
            count = count + 1; 
        }
    }
    console.log(`Total maximum number is: ${count}`);
}
max_number([15,10,15,8,15])