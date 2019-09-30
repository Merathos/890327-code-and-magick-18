'use strict';

(function () {
  var popUpOpenbtn = document.querySelector('.setup-open');
  var popUpClosebtn = window.setup.popUp.querySelector('.setup-close');
  var userNameInput = window.setup.popUp.querySelector('.setup-user-name');
  var dialogHandler = window.setup.popUp.querySelector('.upload');
  var startCoords = {
    x: 0,
    y: 0
  };
  var dragged = false;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.setup.popUp.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.popUp.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  popUpOpenbtn.addEventListener('click', openPopup);
  popUpOpenbtn.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  popUpClosebtn.addEventListener('click', closePopup);
  popUpClosebtn.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, openPopup);
  });

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    window.setup.popUp.style.top = (window.setup.popUp.offsetTop - shift.y) + 'px';
    window.setup.popUp.style.left = (window.setup.popUp.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evnt) {
        evnt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
