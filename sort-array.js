// sort = ordenar os elementos 

let numbers = [0,4,1,2,3,10,20,30]
console.log(numbers.sort());    // [ 0, 1, 10, 2, 20, 3, 30, 4 ]
numbers.sort((a, b) => {
    /*
    console.log('a: '+a);
    console.log('b: '+b);
    console.log('a - b = '+ (a-b));
    */
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;  
});
console.log(numbers);       // [ 0, 1, 2, 3, 4, 10, 20, 30 ]

let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort(function(a, b){
    return a.localeCompare(b)
});
console.log(animaux);       // [ 'abeille', 'chat', 'écureuil', 'zèbre' ]
