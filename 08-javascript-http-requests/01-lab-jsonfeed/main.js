// * The API endpoint for accessing their hotel feed is: https://miikka-smartlyio.github.io/travel-demo/hotels.json
// * Use `XMLHttpRequest` to make a HTTP request to their hotel feed endpoint
// * The response should be a JSON array of objects. Loop through each object and print the `name` of each hotel in the browser console
// * Now, instead of console logging, use DOM Manipulation to add a list of hotel names (using `<ul>` and `<li>`) to the webpage

// FETCH /////////////////////////////////////////////////////////////////

// fetch(' https://miikka-smartlyio.github.io/travel-demo/hotels.json')
//     .then (function (response) {
//        return response.json();
//     })
//     .then ((data) => {
//         const array = data;
//         console.log(array);
//         console.log(array[0]);
        
//         // Create list
//         const docBody = document.querySelector('body');
//         const list = document.createElement('ul');

//         // Create list items
//         for (i = 0; i < array.length; i++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = array[i].name;
            
//             // Add list items to list
//             list.appendChild(listItem);
//             console.log(listItem);
//         }

//         // Append list to page
//         docBody.insertBefore(list, docBody.querySelector('script'));

//     })

// XML ///////////////////////////////////////////////////////////////////////////

const respondeHandler1 = function () {
    const jsonData = JSON.parse(this.responseText);
    console.log(jsonData);

    // Create elements
    const list = document.createElement('ul');

    const docBody = document.querySelector('body');
    docBody.prepend(list);

    // Create list items
    for (i = 0; i < jsonData.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = jsonData[i].name

        list.appendChild(listItem);
    }

};

    const req = new XMLHttpRequest();
    req.addEventListener('load', respondeHandler1);
    req.open('GET', 'https://miikka-smartlyio.github.io/travel-demo/hotels.json');
    req.send();
