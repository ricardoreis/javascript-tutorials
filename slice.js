//slice = retorna uma fatia de um array
let elements =  [0,1,2,3,4,5, 'element', true];

let method = elements.slice(1,6)

console.log(method);                //[ 1, 2, 3, 4, 5 ]
console.log(elements);              //[ 0, 1, 2, 3, 4, 5, 'element', true ]


let title = "Bitcoin";

console.log(title.length);          // 7
console.log(title.slice(7-1));      // 'n'
console.log(title.slice(6));        // 'n'
console.log(title.slice(-1));       // 'n'
console.log(title.slice(-2));       // 'in'
console.log(title.slice(-3));       // 'oin'
console.log(title.slice(-4));       // 'coin'
console.log(title.slice(0, -1));    // 'Bitcoi'
console.log(title.slice(0, -2));    // 'Bitco'
console.log(title.slice(0, -3));    // 'Bitc'
console.log(title.slice(0, -4));    // 'Bit'
console.log(title.slice(-1, -1));   // ''

let email = 'john@example.com'
console.log(email.indexOf('@'));






