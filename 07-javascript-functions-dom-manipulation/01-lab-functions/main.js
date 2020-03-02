console.log('boom');

// ## Function with parameters

// #### Creating your own functions

// 1. Implement a greeting function that will console log "hello, world" when it is called. eg. `greet()`
const greeting = function() {
    console.log('hello, world');
}

// 2. Implement a greetPerson function that takes in an argument that will console log "hello, bob" when it is called. eg. `greetPerson('bob')`
const greetPerson = function(name) {
    console.log(`hello, ${name}`);
}

// Modify greetPerson to take in 2 arguments instead of 1 that will console log "hello, firstName lastName". eg. `greetPerson('bob', 'dylan')`
const fullGreeting = function(firstName, lastName) {
    console.log(`hello ${firstName} ${lastName}!`);
}

// #### Positional parameters

// We can "pass in" values into a function when we call them using parameters. Parameters are also often referred to as arguments.

// Given this function with 2 parameters (`wordA`, `wordB`), rename the parameters to `chicken` and `duck` and make sure the function still works.
const joinWords = function (wordA, wordB) {
    console.log(`${wordA}` + '_' + `${wordB}`);
  };
  
  joinWords('turkey', 'bacon');

  // ## Function that returns a value
  //Try and make this work:

const sum = function (a, b) {
  // sum a and b, and return the computed value
  return a + b;
};

console.log('Your new bank balance is: ' + sum(100, 2));