

console.log('');
let numbers = [1, 2, 3];

let sum = numbers.reduceRight(function (acc, curr) {
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr;
});


console.log(sum);