// * The API endpoint for accessing their hotel feed is: https://miikka-smartlyio.github.io/travel-demo/hotels.json
// * Use `XMLHttpRequest` to make a HTTP request to their hotel feed endpoint
// * The response should be a JSON array of objects. Loop through each object and print the `name` of each hotel in the browser console
// * Now, instead of console logging, use DOM Manipulation to add a list of hotel names (using `<ul>` and `<li>`) to the webpage

const responseHandler = function () {
    const hotel = JSON.parse(this.responseText);
    const body = document.querySelector('body');
    body.appendChild(hotel[0].name);
};

const req = new XMLHttpRequest();
req.addEventListener('load', responseHandler);
req.open('GET', 'https://miikka-smartlyio.github.io/travel-demo/hotels.json');
req.send();