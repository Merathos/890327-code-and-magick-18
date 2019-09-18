'use strict';

var popUp = document.querySelector('.setup');
popUp.classList.remove('hidden');

var similarWizard = document.querySelector('.setup-similar');
similarWizard.classList.remove('hidden');
var fragment = document.createDocumentFragment();
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var randomName;
var randomSurname;
var randomCoatColor;
var randomEyesColor;
var randomWizardList = [];

var getRandomValue = function (arr, randomValue) {
  randomValue = arr[Math.floor(Math.random() * arr.length)];
  return randomValue;
}

var getRandomWizard = function () {
  for (var i = 0; i < 4; i++) {
    var randomWizard = {
      name: getRandomValue(names, randomName) + ' ' + getRandomValue(surnames, randomSurname),
      coatColor: getRandomValue(coatColors, randomCoatColor),
      eyeColor: getRandomValue(eyesColors, randomEyesColor)
    }
    randomWizardList.push(randomWizard);
  }
  return randomWizardList;
}
getRandomWizard();

var renderWizard = function () {
  for (var i = 0; i < randomWizardList.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = randomWizardList[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = randomWizardList[i].eyeColor;
    wizardElement.querySelector('.setup-similar-label').textContent = randomWizardList[i].name;
    fragment.appendChild(wizardElement);
  }
  return fragment;
}

renderWizard();
setupSimilarList.appendChild(fragment);
