const userInput = prompt('Temperature in Fahrenheit you want to convert to Celsius');

// implement code here
/* Not sure that numeric expressions can take paretheses and abide
by calculus rules. So separating expression in 2 parts. Making sure
-32 happens first*/
const firstValue = userInput - 32;
const output = firstValue / 1.8;

// When you are ready to test your program, uncomment the line below
// alert('Converted ' + userInput + ' Fahrenheit to Celsius: ' + output);