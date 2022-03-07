// function a () {
//     return new Promise((resolve, reject) => {
//         resolve("hello")
//     })
// }
// async function b() {
//     const val = await a()
//     console.log(val)
//     console.log("end")
// }
// b()
// a().then(val => {
//     console.log(val)
// })
// console.log("end")
// for(i = 0; i < Infinity; i++) {
// }
// a()
function a() {
    return new Promise((resolve, reject)=>{
        b();
        resolve("test");
    });
}
a().then((a1)=>{
    console.log(a1);
}).catch((err)=>{
// console.log("there was an error");
});
console.log("hello");

//# sourceMappingURL=index.5597702b.js.map
