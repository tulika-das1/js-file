console.log('rs - 100 -> 1');
console.log('rs - 200 -> 2');
console.log('rs - 300 -> 3');

let budget = prompt('Enter the number which your choice:');
console.log(budget);

console.log('V for VEG');
console.log('NV for NONVEG');

let food = prompt('Enter the food which your choice:');
food=food.toUpperCase();
console.log(food);

if(budget == 1 && food == 'V'){
    console.log('Masala Channa,Paneer Makhani Biryani,');
}else if(budget == 1 && food == 'NV'){
    console.log('ala biriyani');
}else if(budget == 2 && food == 'V'){
    console.log('Masala Channa,Paneer Makhani Biryani,Vegetarian Khao Suey');
}else if(budget == 2 && food == 'NV'){
    console.log('dadaboudi chicken biriyani');
}else if(budget == 3 && food == 'V'){
    console.log('Masala Channa,Paneer Makhani Biryani,Vegetarian Khao Suey');
}else if(budget == 3 && food == 'NV'){
    console.log('Arsalan chicken & Mutton biriyani');
}else{
    console.log('Please enter correct budget and food');
}