// function hello(callback, lastname){
//     console.log('hello' + callback(lastname));
// }

// function getName() {
//     return 'Code Mafia';
// }
// function getFirstName() {
//     return 'Code';
// }

// hello(function(name) {
//     return 'Code' + name;
// }, 'Mafia');

function doSomething(a, b, callback){
    const result = callback(a,b);
    console.log(result);
}

function multiplay(a, b){
    return a * b;
}

function plus(a,b) {
    return a + b
}

doSomething(2, 2, multiplay);
doSomething(2, 3, plus);