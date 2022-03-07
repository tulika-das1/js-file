const arr1 = ["G","O","O","D"];
const arr2 = ["M","O","R","N","I","N","G"];
let arr3 = [];
// let arr3 = [...arr1, ' ', ...arr2];

// arr1.push(...arr2);

// console.log(arr1);
// process.exit()
let k = 0;
for(let i=0;i<arr1.length;i++){
    arr3[i] = arr1[i];
}
arr3[arr1.length]=" ";
for(let j=arr1.length+1;j<=arr1.length+arr2.length;j++){
   arr3[j] = arr2[k];
   k++;
}
console.log(arr3);

// for(let s=0;s<arr3.length;s++)
// {
//      console.log(arr3[s]);
// }

// for(console.log('hello');0;console.log('bye'))
// {

// }