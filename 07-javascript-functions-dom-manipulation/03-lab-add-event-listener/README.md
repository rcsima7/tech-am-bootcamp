# Reka's Questions:
Would like to learn more about DOMCOntentLoaded
Why do we need to include the whole functions in the 1st container function?
     *So that we wait for all the DOMcontent to load, and we are able to refer to them without errors?

How would you make this code more organized?
Functions for eventListeners are not defined in advance.
Where should these be located if we define them separately? Before or after the eventListener?

# Reka's Notes:

Task No 2:
OffsetWidth: returns current width of an element

Further challenges No 1:
Solution from: https://stackoverflow.com/questions/23818675/change-background-color-with-a-loop-onclick

Shift out 1st element of array on click and push it to the end.
For loop didn't work. It looped through the whole array at each click so quickly that only the last color in the array could be seen.

# Event listeners

Now that we know how to manipulate the DOM using JavaScript, it's time to tie it all together by making this workflow happen with our code:

> User clicks a button --> A block of our JavaScript code is run --> Changes something on the page

For this exercise, open index.html in the browser and write your code in main.js.

#### Instructions

1. Write code that enables a user to change the colour of __box1__ to "salmon" colour by clicking on the "Change colour" button.
    * __Hint__: You will need to use `addEventListener` and write the code in the function that will be called whenever the 'click' event happens on the button.
2. Now, write code that enables a user to increase the width of __box2__ by 20px with each click of the "Increase width" button.

#### Bonus

Further challenges:

1. Modify the logic of "Change colour" so that it changes box1's background to a random colour (perhaps out of a list of 10 predefined colours).
2. Write code that will enable a user to click the key 'c' on their keyboard to trigger a background colour change in box1.
3. Implement a Reset button that will change both boxes to their original state.

