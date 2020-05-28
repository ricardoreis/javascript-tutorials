// forEach =  executa uma função especificada para cada elemento dentro do array

let elements =  [0,1,2,3,4,5, 'element', 'string element', true];
let method = elements.forEach(function(e, index){
    if(typeof e == 'number'){
        elements[index] = e + 2;
    }else if(typeof e == 'boolean'){
        elements[index] = false;
    }else{
       elements[index] = 'word'; 
    }

})
console.log(method);            // undefined
console.log(elements);          // [ 2, 3, 4, 5, 6, 7, 'word', 'word', false ]


function Counter () {
    this.count = 0;
    let self = this;
    return {
        increase: function () {
            self.count++;
        },
        current: function () {
            return self.count;
        },
        reset: function () {
            self.count = 0;
        }
    }
}

var counter = new Counter;
var numbers = [1,2,3];
var sum = 0;

numbers.forEach(function(e){
    sum += e;
    this.increase();
}, counter);

console.log(sum);                   // 6
console.log(counter.current());     // 3

