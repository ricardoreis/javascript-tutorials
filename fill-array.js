// fill = preenche os elemtentos com um valor especificado 

let elements =  [0,1,2,3,4,5, 'element', true];
let method = elements.fill('xx', 3, 6)
console.log(method);        // [ 0, 1, 2, 'xx', 'xx', 'xx', 'element', true ]
console.log(elements);      // [ 0, 1, 2, 'xx', 'xx', 'xx', 'element', true ]