// function sumOfNumberSorted(numbers,sum){
// for(let i=0; i<numbers.length; i++){
//     for(let j=i+1; j < numbers.length; j++){
//         if(numbers[i] + numbers[j] == sum){
//             console.log(numbers[i] , numbers[j])
//             return;
//         }
//     }
//   console.log("The sum of number not found")  
// }
// }
function sumOfNumberSorted(numbers,sum){
    let storenumber = {}
    for(let i= 0; i < numbers.length; i++){
        let need = sum - numbers[i] 
        if(storenumber.hasOwnProperty(need)){
            console.log(numbers[i] , need )
        }
        storenumber[numbers[i]] = true
    }
    
}

sumOfNumberSorted([4,2,7,9,5],9)




