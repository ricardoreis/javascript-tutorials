/* Sybtax:
*  Array.splice(position, 0, new_element_1, new_element_2, ...)
*/

let colors = ['red','green','blue'];

colors.splice(2, 0, 'purble');
console.log(colors);        // [ 'red', 'green', 'purble', 'blue' ]

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);        // [ 'red', 'yellow', 'pink', 'green', 'purble', 'blue' ]


let languages = ['C', 'C++', 'Java', 'JavaScript'];

languages.splice(1, 1, 'Python');
console.log(languages);     // [ 'C', 'Python', 'Java', 'JavaScript' ]

languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages);     //[ 'C', 'Python', 'C#', 'Swift', 'Go', 'JavaScript' ]