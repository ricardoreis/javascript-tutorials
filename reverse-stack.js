
function reverse(str){
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while(stack.length > 0){
        reverseStr += stack.pop();
    }
    return reverseStr;
} // end function 

console.log(reverse('Ricardo'))