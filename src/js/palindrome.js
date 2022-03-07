let a = 'MAX';
a = a.split('')
let b = [];
// b[0] = a[2];
// b[1] = a[1];
// b[2] = a[0];
// console.log(b);
let j = a.length - 1;
for(let i=0;i<a.length;i++){
    b[i]=a[j];
    j--;
}
// console.log(a);
// console.log(b);

//  for(let i=0;i<=4;i++){
//     if(a[i] != b[i]){  
//         console.log('It is not Palindrome');
//     }else {
//         console.log('It is Palindrome');
//     } 
// }

// let misscall = 0;
// for(let i=0;i<=4;i++){
//     if(a[i] == b[i]){
//        continue; 
//     }else{
//        misscall++;
//     }
// }
// if(misscall == 0){
//     console.log('It is Palindrome');
// }else{
//     console.log('It is not Palindrome');
// } 

a = a.join('')
b = b.join('')

if(a == b) {
    console.log('It is a Palindrom')
}else {
    console.log('It isn\'t a Palindrom')
}
