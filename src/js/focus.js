// let x = document.querySelectorAll("input")
// x.forEach(ele => {
//     ele.addEventListener('focus', (ev) => {
//         ev.target.style.height="80px"
//         // console.log('hello');
//       })
// })

// let x = document.querySelector('input')
// x.addEventListener('blur',() => {
//  console.log("Hello");
// })
// let f = document.querySelectorAll("input");
// f.forEach(element =>{
//     element.addEventListener('focus', (ev) =>{
//         setTimeout(() => {
//             ev.target.blur();
//         },5000)
//     })
// })

// document.querySelector("button").addEventListener('click',(event) => {
//     event.preventDefault();
//     event.target.style.background="	#FF0000";
// })

// document.querySelector("button[type = 'button1']").addEventListener('click',() => {
//     document.querySelector("input").focus();
// })
// document.querySelector("button[type = 'button2']").addEventListener('click',() => {
//     document.querySelector("input").blur();
// })

// const names = ["Rahul","Abir","Sumit","Ratul"];
// let inp = document.querySelector('input');
// inp.addEventListener('input',() =>{
//     let val = inp.value;
//     document.querySelectorAll(".name li").forEach(li => li.remove());
//     for(let i = 0;i<names.length;i++){
//         // let name = []; 
//         // for(let j = 0;j<val.length;j++){
//         //   name[j]= names[i][j];
//         // }
//         // if(name.join("") == val){
//         //     console.log(names[i])
//         // }
//         if(names[i].startsWith(val) && val != "") {
//             const node = document.createElement("li");
//             const textnode = document.createTextNode(names[i]);
//             node.appendChild(textnode);
//             document.querySelector(".name").append(node); 
//         }
//     }
    
// })


// let btn = document.querySelectorAll("button")
// btn.forEach(ele => {
//     ele.addEventListener('focus',(event) => {
//         event.target.style.background="	#FF0000";
//     })
// })
 
// const btn = document.querySelectorAll('button[type="submit"]');
// btn.forEach(ele => {
//     ele.addEventListener('click', (event) => {
//         btn.forEach(bt => bt.style.background ='');
//         event.target.style.background = 'pink';
//     });
// })

// let btn = document.querySelector("button");
// let menu = document.querySelector(".drop-down-menu");
// btn.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     menu.classList.toggle('hide');
// })

let btn = document.querySelector("div");
btn.addEventListener('click', () => {
    if(btn.style.animationDirection  == "normal"){
        btn.style.animationDirection  = "reverse";
    }else{
        btn.style.animationDirection  = "normal";
    }
})





