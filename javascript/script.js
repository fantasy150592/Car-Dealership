//hide preloader

window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))




// reveal pattern
// life immediately invoked function expression


//function declaration
function sayHi() {
    console.log('hello');
}

//invoke the function 
// sayHi();

// function expression
var person = function(name) {
    console.log(`Hello I'm ${name}`);
};

//call the function
// person('john');

//immediately invoked function 
// does not need to be invoked separately
// variables not is global scope
(function() {
    //private variable not in the global scope
    // var name = 'john';
    // console.log(name);
    // console.log('hello');
})