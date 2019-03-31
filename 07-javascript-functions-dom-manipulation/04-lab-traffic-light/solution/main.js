console.log('boom');

const turnOffAllLights = function () {
  const bulbs = document.querySelectorAll('.bulb');
  bulbs.forEach(function (bulb) {
    bulb.classList.remove('on');
  });
};

const turnOnLightFor = function (buttonId) {
  const lightId = `${buttonId}Light`;
  document.querySelector(`#${lightId}`).classList.add('on');
};

const clickHandler = function () {
  const buttonId = this.id;

  turnOffAllLights();
  turnOnLightFor(buttonId);
};

// Add event listeners only after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach(function (btn) {
    btn.addEventListener('click', clickHandler);
  });
});
