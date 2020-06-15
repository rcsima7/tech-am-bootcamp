document.addEventListener('DOMContentLoaded', function () {

const userInput = document.querySelector('#convert-from');


// implement code here
/* Not sure that numeric expressions can take paretheses and abide
by calculus rules. So separating expression in 2 parts. Making sure
-32 happens first*/


// When you are ready to test your program, uncomment the line below
// alert('Converted ' + userInput + ' Fahrenheit to Celsius: ' + output);

const metricSelected = document.querySelector('.dropdown-toggle');

const fahrenheit = document.querySelector('#F')
fahrenheit.addEventListener('click', function() {
    metricSelected.textContent = 'Fahrenheit';
    console.log(metricSelected.textContent);
});
const celsius = document.querySelector('#C')
celsius.addEventListener('click', function() {
    metricSelected.textContent = 'Celsius'
    console.log(metricSelected.textContent);
});

let firstValue;
let output;
let outputContainer = document.createElement('h1')
let carouselCaption = document.querySelector('.carousel-caption')
carouselCaption.appendChild(outputContainer);

const conversion = function() {
    if (metricSelected.textContent === 'Fahrenheit') {
        firstValue = userInput.value - 32;
        output = firstValue / 1.8;
        console.log(output);
        console.log(metricSelected.textContent);

        outputContainer.textContent = output + ' Celsius';
    }
    else if (metricSelected.textContent === 'Celsius') {
        firstValue = userInput.value + 32;
        output = firstValue * 1.8;
        console.log(output);
        console.log(metricSelected.textContent);

        outputContainer.textContent = output + ' Fahrenheit';
    }
}

// CAROUSEL //////////////////////////////////////////////////////////////////////

let pic1 = document.querySelector('#pic1')
let pic2 = document.querySelector('#pic2')
let pic3 = document.querySelector('#pic3')

const imageChanges = function () {
if (output < 15) {
    pic1.src = 'https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    pic2.src = 'https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    pic3.src = 'https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    console.log(output);
}
else if (output > 15 && output < 25) {
    pic1.src = 'https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    pic2.src = 'https://images.pexels.com/photos/413707/pexels-photo-413707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    pic3.src = 'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

}
else if (output > 25) {
    pic1.src = 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
    pic2.src = 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500';
    pic3.src = 'https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
}
}

document.querySelector('#convert').addEventListener('click', conversion);
document.querySelector('#convert').addEventListener('click', imageChanges);





});