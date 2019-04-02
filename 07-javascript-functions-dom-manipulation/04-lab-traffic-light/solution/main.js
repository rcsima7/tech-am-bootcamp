console.log('boom');

/**
 * Vanilla JavaScript implementation
 */
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


/**
 * jQuery implementation
 */
// const turnOffAllLights = function () {
//   const bulbs = $('.bulb');

//   for (let i = 0; i < bulbs.length; i++) {
//     const bulb = bulbs[i];
//     $(bulb).removeClass('on');
//   }
// };

// const turnOnLightFor = function (buttonId) {
//   const lightId = `${buttonId}Light`;
//   $(`#${lightId}`).addClass('on');
// };

// const clickHandler = function () {
//   const buttonId = this.id;

//   turnOffAllLights();
//   turnOnLightFor(buttonId);
// };

// // Add event listeners only after DOM is loaded
// $(document).ready(function () {
//   const buttons = $('.button');

//   for (let i = 0; i < buttons.length; i++) {
//     const btn = buttons[i];
//     $(btn).on('click', clickHandler);
//   }
// });
