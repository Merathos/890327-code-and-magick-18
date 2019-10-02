'use strict';

(function () {
  var KeyCodes = {
    ESC: 27,
    ENTER: 13
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === KeyCodes.ESC) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === KeyCodes.ENTER) {
      action();
    }
  };

  var onError = function (errorMsg) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMsg;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    URL: {
      SAVE: 'https://js.dump.academy/code-and-magick',
      LOAD: 'https://js.dump.academy/code-and-magick/data'
    },
    onError: onError
  };
})();
