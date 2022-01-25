// document.querySelector("h1").addEventListener('click', () => {
//     if(!document.querySelector('p')){
//         const sect = document.querySelector('section')
//         const para = document.createElement('p')
//         para.style.backgroundColor = '#f0f'
//         para.style.height = '30px'
//         para.textContent = "Tulika"
//         sect.appendChild(para);
//     }else{
//         document.querySelector('p').remove()   
//     }
//     // alert("Hello World!");
// });
// Select all elemets
// for (let i = 1; i <= 100; i++) {
//     const sec = document.querySelector('section')
//     const para = document.createElement('p')
//     para.textContent = 'Hello I\'am P '+ i
//     sec.appendChild(para)
// }
// const all_p = document.querySelectorAll('p') // will return array of nodeList
// all_p.forEach(elem => {
// elem.addEventListener('click', (event) => {
//     event.target.style.color = '#f00';
// })
//     elem.addEventListener('mouseenter', ({target}) => {
//         const red = randomValue(30, 255)
//         const green = randomValue(30, 255)
//         const blue = randomValue(30, 255)
//         target.style.color = `rgb(${red}, ${green}, ${blue})`;
//     })
// })
// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// const arr1 = ["Tulika" , "Das"]
// let i = 0;  
// const interval = setInterval(() => {
// let p = document.querySelector(".paratext")
// p.textContent = arr1[i];
// i++
// if(i  == arr1.length){
//     i = 0;
// }
// },5000 )
// let i = 0;
// document.querySelector(".second_btn").addEventListener('click' , () =>{
// let no = document.querySelector(".number")
// i++
// no.textContent = i;  
// } )
// document.querySelector(".first_btn").addEventListener('click' , () =>{
// let no = document.querySelector(".number")
// if(i > 0)
// {
//     i--;
//     no.textContent = i;   
// }
// } )
let ball = document.querySelector(".ball");
let i = 0;
let screen_width = screen.width;
let ball_width = ball.offsetWidth;
let cal = screen_width - ball_width;
const interval = setInterval(()=>{
    if (i < cal) {
        i += 3;
        ball.style.left = i + 'px';
    }
    if (i < cal) {
        i += 3;
        ball.style.right = i + 'px';
    }
}, 16);

//# sourceMappingURL=index.527d4f93.js.map
