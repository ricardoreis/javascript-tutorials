// some = retorna true ou false dependendo do resultado da função de callback

let elements =  [0,1,2,3,4,5, 'element', true];
let method = elements.some(function(e){
    return e == 6;
})
console.log(method);                    // false
console.log(elements);                  // [ 0, 1, 2, 3, 4, 5, 'element', true ]


function exists(value, array){
    return array.some(e => e === value)
}
let marks = [4,5,7,9,10,2]
console.log(exists(4, marks));          // true
console.log(exists(11, marks));         // false
console.log(marks.some(e => e === 4));  // true 

