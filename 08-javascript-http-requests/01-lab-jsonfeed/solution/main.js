document.addEventListener('DOMContentLoaded', function () {
  const displayOnPage = function (arrayOfObjects) {
    const main = document.querySelector('#main');
    const ul = document.createElement('ul');

    for (let i = 0; i < arrayOfObjects.length; i++) {
      const item = arrayOfObjects[i];
      // create
      const li = document.createElement('li');
      // modify
      li.textContent = item.name;
      // append
      ul.appendChild(li);
    }
    main.appendChild(ul);
  };

  const responseHandler = function () {
    const responseDataInJSON = JSON.parse(this.responseText);
    displayOnPage(responseDataInJSON);
  };

  const req = new XMLHttpRequest();
  req.addEventListener('load', responseHandler);
  req.open('GET', 'https://miikka-smartlyio.github.io/travel-demo/hotels.json');
  req.send();
});
