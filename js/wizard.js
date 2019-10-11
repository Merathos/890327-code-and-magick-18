'use strict';

(function () {
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var setupPlayer = document.querySelector('.setup-player');
  var coatInput = setupPlayer.querySelector('input[name=coat-color]');
  var eyesInput = setupPlayer.querySelector('input[name=eyes-color]');
  var fireballInput = setupPlayer.querySelector('input[name=fireball-color]');
  var wizardCoatColors = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];
  var wizardEyesColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];
  var wizardFireballColors = ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    },
    onFireballChange: function (color) {
      return color;
    }
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(wizardCoatColors);
    coatInput.value = newColor;
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(wizardEyesColors);
    eyesInput.value = newColor;
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = getRandomElement(wizardFireballColors);
    fireballInput.value = newColor;
    wizardFireball.style.backgroundColor = newColor;
    wizard.onFireballChange(newColor);
  });

  window.wizard = wizard;
})();
