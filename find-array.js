
//find = retorna o valor do primeiro elemento em que a condição for verdadeira, caso contrário vai retornar undefined

let elements =  [0,1,2,3,4,5, 'element', 'string element', true];

let method = elements.find(function(e){
    return typeof e == 'string'
    
})

console.log(method);
console.log(elements);

var scores = [10, 20, 30, 10, 40, 20];
function find(needle, haystack){
    var results = [];
    var idx = haystack.indexOf(needle);
    while(idx != -1){
        results.push(idx);
        idx = haystack.indexOf(needle, idx +1)
    }
    return results
}
console.log(find(10, scores));      // [ 0, 3 ]
