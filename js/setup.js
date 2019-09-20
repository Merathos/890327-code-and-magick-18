'use strict';

var popUp = document.querySelector('.setup');
var similarWizard = document.querySelector('.setup-similar');
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var randomWizardList = [];

popUp.classList.remove('hidden');

similarWizard.classList.remove('hidden');

var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomWizard = function () {
  for (var i = 0; i < 4; i++) {
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

  getRandomWizard();

  for (var i = 0; i < randomWizardList.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = randomWizardList[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = randomWizardList[i].eyeColor;
    wizardElement.querySelector('.setup-similar-label').textContent = randomWizardList[i].name;
    fragment.appendChild(wizardElement);
  }
  setupSimilarList.appendChild(fragment);
};

renderWizards();
