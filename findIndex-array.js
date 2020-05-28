//findIndex = passando uma função, retorna o índice do priemiro elemento ou -1

let elements =  [0,1,2,3,4,5, 'element', true];

let method = elements.findIndex(function(e){
    //console.log(e)
    return e=='element'
})
console.log(method);
console.log(elements);