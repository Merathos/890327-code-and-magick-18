'use strict';

(function () {
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_AMOUNT = 4;
  var popUp = document.querySelector('.setup');
  var similarWizard = document.querySelector('.setup-similar');
  var newWizCoat = popUp.querySelector('.wizard-coat');
  var newWizEyes = popUp.querySelector('.wizard-eyes');
  var newWizFireball = popUp.querySelector('.setup-fireball-wrap');
  var form = popUp.querySelector('.setup-wizard-form');

  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.backend.load(window.util.URL.LOAD, function (randomWizardList) {
    var fragment = document.createDocumentFragment();
    var setupSimilarList = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.wizard-coat').style.fill = randomWizardList[i].colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = randomWizardList[i].colorEyes;
      wizardElement.querySelector('.setup-similar-label').textContent = randomWizardList[i].name;
      fragment.appendChild(wizardElement);
    }
    setupSimilarList.appendChild(fragment);
  }, window.util.onError);

  var getRandomCoat = function () {
    var coatInput = popUp.querySelector('input[name=coat-color]');

    coatInput.value = getRandomValue(coatColors);
    newWizCoat.style.fill = coatInput.value;
  };

  var getRandomEyes = function () {
    var eyesInput = popUp.querySelector('input[name=eyes-color]');

    eyesInput.value = getRandomValue(eyesColors);
    newWizEyes.style.fill = eyesInput.value;
  };

  var getRandomFireball = function () {
    var fireballInput = popUp.querySelector('input[name=fireball-color]');

    fireballInput.value = getRandomValue(fireballColors);
    newWizFireball.style.backgroundColor = fireballInput.value;
  };

  similarWizard.classList.remove('hidden');

  newWizCoat.addEventListener('click', getRandomCoat);
  newWizEyes.addEventListener('click', getRandomEyes);
  newWizFireball.addEventListener('click', getRandomFireball);

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(window.util.URL.SAVE, new FormData(form), function () {
      window.dialog.closePopup();
    }, window.util.onError);
  });

  window.setup = {
    popUp: popUp
  };
})();
