
// every = determina se todos os elementos satisfazerm o teste especificado, retorna true ou false

let elements =  [0,1,2,3,4,5, 'element', true];
let method = elements.every(function(e){
    return typeof e == 'number';
})

console.log(method);        // false
console.log(elements);      // [ 0, 1, 2, 3, 4, 5, 'element', true ]


let numbers = [2,8,10];
let range = {
    min: 0,
    max: 10
}

let isInRange = numbers.every(function(e){
    return e >= this.min && e <= this.max;
}, range);

console.log(isInRange);     //true


