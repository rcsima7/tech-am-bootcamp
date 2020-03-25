console.log('boom');
// 1. Using `getElementById` to select __box1__, change the following style properties of the box:
//     * height: 100px
//     * width: 750px
//     * background colour: purple

let box1 = document.getElementById('box1');
box1.style.backgroundColor = 'purple';
box1.style.height = '100 px';
box1.style.width = '750 px';

// 2. Now use `querySelector` to select the __box2__ by ID and add the class "box-cool" to the element (no need to write your own CSS for it).

let box2Classes = document.querySelector('#box2');
box2Classes.classList.add('box-cool');

// 3. Next, use whatever selector you wish to change the 
// link URL from https://google.com to https://smartly.io.
// Click the link to test it!

let link = document.querySelector('a').href = 'https://smartly.io';

// 4. Now, use `querySelectorAll` to select __both boxes__
// and change their background colour to be "paleturquoise".

// Question: Why does the " vs ' matter here?
// If ' is used instead of " there is an error: missing ) after argument list
let allBoxes = document.querySelectorAll("div[class^='box']");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Check if loop works:
// for (i = 0; i < allBoxes.length; i++) {
// 	console.log(i);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Check if color change works
// document.querySelector('.box-cool').style.backgroundColor = 'paleturquoise';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Check if index selector works
// allBoxes[0];

for (i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = 'paleturquoise'
};