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

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    URL: {
      SAVE: 'https://js.dump.academy/code-and-magick',
      LOAD: 'https://js.dump.academy/code-and-magick/data'
    }
  };
})();
