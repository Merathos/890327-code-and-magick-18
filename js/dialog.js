'use strict';

(function () {
  var popUp = document.querySelector('.setup');
  var popUpOpenbtn = document.querySelector('.setup-open');
  var popUpClosebtn = popUp.querySelector('.setup-close');
  var userNameInput = popUp.querySelector('.setup-user-name');
  var dialogHandler = popUp.querySelector('.upload');
  var form = popUp.querySelector('.setup-wizard-form');
  var startCoords = {
    x: 0,
    y: 0
  };
  var dragged = false;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    popUp.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    popUp.classList.add('hidden');
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

    popUp.style.top = (popUp.offsetTop - shift.y) + 'px';
    popUp.style.left = (popUp.offsetLeft - shift.x) + 'px';
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

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(window.util.URL.SAVE, new FormData(form), function () {
      closePopup();
    }, window.util.onError);
  });

  window.dialog = {
    closePopup: closePopup
  };
})();
