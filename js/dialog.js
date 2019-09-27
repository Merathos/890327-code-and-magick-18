'use strict';

(function () {
  var popUpOpenbtn = document.querySelector('.setup-open');
  var popUpClosebtn = window.popUp.querySelector('.setup-close');
  var userNameInput = window.popUp.querySelector('.setup-user-name');
  var dialogHandler = window.popUp.querySelector('.upload');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.popUp.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.popUp.classList.add('hidden');
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

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

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

      window.popUp.style.top = (window.popUp.offsetTop - shift.y) + 'px';
      window.popUp.style.left = (window.popUp.offsetLeft - shift.x) + 'px';

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

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
