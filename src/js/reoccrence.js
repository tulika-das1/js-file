function find_first_reoccarence(input){
    for(let i =0; i<input.length; i++){
      for(let j = i+1; j<input.length; j++){
        if(input[i] == input[j]){
          console.log(input[i])
          return;
        }   
      }
    //   console.log(i)
    }
    console.log(null);
    return
   }
// function  find_first_reoccarence(input){
//     let occarence = new Set()
//     for(let i = 0; i< input.length; i++){
//         if(occarence. (input[i])){
//             console.log(input[i])
//             return
//         }
//         occarence.add(input[i])
//     }
//     console.log(null)
// }

   console.time('test')
   find_first_reoccarence('ABBCCDDA')
   console.timeEnd('test')
