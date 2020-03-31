console.log('Uhlala!');

// Game plan:
// 3 event listeners, each set bulb background
// to relevant color, and others to black

// Lights
const stopLight = document.querySelector('#stopLight');
const slowLight = document.querySelector('#slowLight');
const goLight = document.querySelector('#goLight');

// Buttons
const stopButton = document.querySelector('#stopButton');
const slowButton = document.querySelector('#slowButton');
const goButton = document.querySelector('#goButton');

// Listeners
stopButton.addEventListener('click', function () {
    stopLight.style.backgroundColor = 'red';
    slowLight.style.backgroundColor = 'black';
    goLight.style.backgroundColor = 'black'; 
});

slowButton.addEventListener('click', function () {
    stopLight.style.backgroundColor = 'black';
    slowLight.style.backgroundColor = 'yellow';
    goLight.style.backgroundColor = 'black'; 
});

goButton.addEventListener('click', function () {
    stopLight.style.backgroundColor = 'black';
    slowLight.style.backgroundColor = 'black';
    goLight.style.backgroundColor = 'green'; 
});