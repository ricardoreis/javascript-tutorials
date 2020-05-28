// reduce = reduz todos os elementos de um array a um único valor
let elements =  [0,1,2,3,4,5];
let method = elements.reduce(function(initial, e){
     return initial + e;    
})
console.log(method);        // 15
console.log(elements);      // [ 0, 1, 2, 3, 4, 5 ]



let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];
let total = shoppingCart.reduce(function (acc, curr) {
    return acc + curr.qty * curr.price;
},0);
console.log(total);          // 750.96