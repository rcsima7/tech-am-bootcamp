const userInput = prompt('What number do you want to be checked for odd-even-ness?');

if (userInput % 2 === 0) {
	const output = 'even';
	alert('it is... ' + output);
}
else {
	const output = 'odd';
	alert('it is... ' + output);
};

// implement code here
// Commenting these out, moving aler into if statetement
// const output = 'hardcoded odd';
// alert('it is... ' + output);