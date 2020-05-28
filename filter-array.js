// filter = retorna um array com os elementos que atendem a uma condição especificada dentro de callback
let elements =  [0,1,2,3,4,5, 'element', 'string element', true];
let method = elements.filter(function(e){
    //console.log(e)
    return typeof e == 'string'
})
console.log(method);            // [ 'element', 'string element' ]
console.log(elements);          // [ 0, 1, 2, 3, 4, 5, 'element', 'string element', true ]

function isInRange(value){
    if (typeof value !== 'number'){
        return false;
    }
    return value >= this.lower && value <= this.upper;
}
let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
let range = {
    lower: 1,
    upper: 10
}
let numberInRange = data.filter(isInRange, range);
console.log(numberInRange);     // [ 10, 1, 5 ]
