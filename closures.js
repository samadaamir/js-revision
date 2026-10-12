//Clousers in JavaScript are functions that have access to the variables from another function's scope. This is often used to create private variables or to maintain state between function calls.

// Example of a closure
function outerFunction() {
    let outerVar = 'I am from the outer function';
    
    function innerFunction() {
        console.log(outerVar);
    }
    
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: I am from the outer function