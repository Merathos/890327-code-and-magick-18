'use strict';

(function () {

  var MAX_WIZ = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template');
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  var appendWiz = function (data) {
    similarList.innerHTML = '';
    data.slice(0, MAX_WIZ).forEach(function (el) {
      similarList.appendChild(renderWizard(el));
    });

    similar.classList.remove('hidden');
  };

  window.render = {
    appendWiz: appendWiz
  };

})();
