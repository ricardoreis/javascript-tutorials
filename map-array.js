// map = transforma os elementos conforne a função de callback 

let elements =  [0, 1, 'element', 'string element', true];
let method = elements.map(function (e){
    return typeof e
})
console.log(method);        // [ 'number', 'number', 'string', 'string', 'boolean' ]
console.log(elements);      // [ 0, 1, 'element', 'string element', true ]


let animals = ['monkey', 'rhinoceros', 'bull', 'horse']
let yellowAnimals = animals.map((e)=>'yellow '+e)
console.log(yellowAnimals); // [ 'yellow monkey', 'yellow rhinoceros', 'yellow bull', 'yellow horse' ]
