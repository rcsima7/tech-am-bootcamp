# Reka's Questions

1. Creating your own functions / 2
    `hi there ${name}`
    Only works with ` apostrophes and not quotation marks.
    Is this specific to the ${...} syntax?

# Functions

For all the exercises below, we will write our code in the main.js file and open the linked index.html in the browser. Open your browser console to see the results.

## Function with parameters

#### Creating your own functions

1. Implement a greeting function that will console log "hello, world" when it is called. eg. `greet()`
2. Implement a greetPerson function that takes in an argument that will console log "hello, bob" when it is called. eg. `greetPerson('bob')`
3. Modify greetPerson to take in 2 arguments instead of 1 that will console log "hello, firstName lastName". eg. `greetPerson('bob', 'dylan')`

#### Positional parameters

We can "pass in" values into a function when we call them using parameters. Parameters are also often referred to as arguments.

Given this function with 2 parameters (`wordA`, `wordB`), rename the parameters to `chicken` and `duck` and make sure the function still works.

```js
const joinWords = function (wordA, wordB) {
  console.log(wordA + ' ' + wordB);
};

joinWords('hello', 'world');
```

Try running `joinWords('world', 'hello')`. Is the printed value different? What does this tell us about the nature of parameters in functions?

## Function that returns a value

So far we have only been printing values to the console. That is not the same as a function returning a value.

For example, assigning the result of a function call to a variable currently gives `undefined`.

```js
const result = greet();
console.log(result); //=> undefined
```

This is not good. Imagine if you wanted to write a function that sums up two numbers (based on the 2 arguments passed into it), how can the function provide the summed number to the caller, for further computation?

Try and make this work:

```js
const sum = function (a, b) {
  // sum a and b, and return the computed value
};

console.log('Your new bank balance is: ' + sum(100, 2));
```
