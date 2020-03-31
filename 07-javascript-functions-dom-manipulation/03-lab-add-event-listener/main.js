console.log('boom');

document.addEventListener('DOMContentLoaded', function () {
  // code to run after DOM has loaded
  
  // 1. Write code that enables a user to change the colour of __box1__ to "salmon" colour by clicking on the "Change colour" button.
  // const ChangeColourBtn = document.getElementById('button1');

  //   ChangeColourBtn.addEventListener('click', function () {
  //     const box1 = document.getElementById('box1');
  //       box1.style.backgroundColor = 'salmon';
  //     });

  // 2. Now, write code that enables a user to increase the width of __box2__ by 20px with each click of the "Increase width" button.
    const IncreaseWidthBtn = document.getElementById('button2');

      IncreaseWidthBtn.addEventListener('click', function() {
        const box2 = document.getElementById('box2');
        const widthOrigin = box2.offsetWidth;
        box2.style.width = widthOrigin + 20 + 'px';
        console.log(box2.offsetWidth);
      });

  // Further challenges////////////////////////////////////////////////////////////////////////     
  // 1. Modify the logic of "Change colour" so that it changes box1's background to a random colour (perhaps out of a list of 10 predefined colours).
  
  // Solution from: https://stackoverflow.com/questions/23818675/change-background-color-with-a-loop-onclick
  // Shift out 1st element of array on click and push it to the end

  const box1 = document.getElementById('box1');
  const ChangeColourBtn = document.getElementById('button1');

  const colourList = ['PeachPuff', 'Chocolate', 'SpringGreen', 'Aquamarine', 'DodgerBlue', 'Honeydew', 'LavenderBlush', 'DarkOrchid', 'Plum', 'PowderBlue'];

    ChangeColourBtn.addEventListener('click', function () {
      color = colourList.shift();
      colourList.push(color);

        box1.style.backgroundColor = color;
    });

  // 2. Write code that will enable a user to click the key 'c' on their keyboard to trigger a background colour change in box1.
  
  // Test how to get value of a certain key pressed:
  // window.addEventListener('keypress', function () {
  // if (event.key === 'c') {
  // 	console.log(event.key + ' was pressed');
  // 	};
  // });
  
  ChangeColourBtn.addEventListener('keypress', function() {
    if (event.key === 'c') {
      
      color = colourList.shift();
      colourList.push(color);

      box1.style.backgroundColor = color;
    };
  });

  // 3. Implement a Reset button that will change both boxes to their original state.
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset boxes';
  document.body.appendChild(resetButton);

  resetButton.addEventListener('click', function() {
    box1.style.backgroundColor = 'mediumspringgreen';
    box2.style.width = '500px';
  });
});