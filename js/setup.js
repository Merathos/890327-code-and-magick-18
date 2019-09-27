'use strict';

(function () {
  var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_AMOUNT = 4;
  window.popUp = document.querySelector('.setup');
  var similarWizard = document.querySelector('.setup-similar');
  var newWizCoat = window.popUp.querySelector('.wizard-coat');
  var newWizEyes = window.popUp.querySelector('.wizard-eyes');
  var newWizFireball = window.popUp.querySelector('.setup-fireball-wrap');

  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var getWizardList = function () {
    var randomWizardList = [];

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var randomWizard = {
        name: getRandomValue(names) + ' ' + getRandomValue(surnames),
        coatColor: getRandomValue(coatColors),
        eyeColor: getRandomValue(eyesColors)
      };
      randomWizardList.push(randomWizard);
    }
    return randomWizardList;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    var setupSimilarList = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var randomWizardList = getWizardList();

    for (var i = 0; i < randomWizardList.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.wizard-coat').style.fill = randomWizardList[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = randomWizardList[i].eyeColor;
      wizardElement.querySelector('.setup-similar-label').textContent = randomWizardList[i].name;
      fragment.appendChild(wizardElement);
    }
    setupSimilarList.appendChild(fragment);
  };

  var getRandomCoat = function () {
    var coatInput = window.popUp.querySelector('input[name=coat-color]');

    coatInput.value = getRandomValue(coatColors);
    newWizCoat.style.fill = coatInput.value;
  };

  var getRandomEyes = function () {
    var eyesInput = window.popUp.querySelector('input[name=eyes-color]');

    eyesInput.value = getRandomValue(eyesColors);
    newWizEyes.style.fill = eyesInput.value;
  };

  var getRandomFireball = function () {
    var fireballInput = window.popUp.querySelector('input[name=fireball-color]');

    fireballInput.value = getRandomValue(fireballColors);
    newWizFireball.style.backgroundColor = fireballInput.value;
  };

  similarWizard.classList.remove('hidden');

  newWizCoat.addEventListener('click', getRandomCoat);
  newWizEyes.addEventListener('click', getRandomEyes);
  newWizFireball.addEventListener('click', getRandomFireball);

  renderWizards();
})();
