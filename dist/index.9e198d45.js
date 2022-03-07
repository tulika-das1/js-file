function main(input) {
    let sum1 = 0;
    let sum2 = 0;
    let j = 0;
    for(let i = 0; i < input.length; i++)sum1 = sum1 + input[i][i];
    console.log(sum1);
    for(let i1 = input.length - 1; i1 >= 0; i1--){
        //    console.log(input[i])
        //    return
        let value = input[i1];
        sum2 = sum2 + value[j];
        j++;
    }
    console.log(sum2);
    //    if(sum2 > sum1){
    //        console.log(sum2 - sum1);
    //    }else{
    //        console.log(sum1 - sum2);
    //    }
    console.log(Math.abs(sum1 - sum2));
}
main([
    [
        1,
        5,
        8
    ],
    [
        5,
        7,
        3
    ],
    [
        4,
        8,
        9
    ]
]);

//# sourceMappingURL=index.9e198d45.js.map
