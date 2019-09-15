'use strict';

var GAP = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 150;
var CLOUD_Y = 10;
var CLOUD_X_WITH_GAP = CLOUD_X + GAP;
var CLOUD_Y_WITH_GAP = CLOUD_Y + GAP;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_FONT_COLOR = '#000';
var CLOUD_FONT_SIZE = 16;
var FONT_WITH_GAP = CLOUD_FONT_SIZE + GAP;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_YOU_TEXT = 'Вы';
var BAR_YOU_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  return Math.max.apply(null, times);
};

var getRandomBlueColor = function () {
  return 'hsl(240,100%,' + Math.floor(Math.random() * 100) + '%)';
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X_WITH_GAP, CLOUD_Y_WITH_GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = CLOUD_FONT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X_WITH_GAP, CLOUD_Y_WITH_GAP);
  ctx.fillText('Список результатов:', CLOUD_X_WITH_GAP, CLOUD_Y_WITH_GAP + FONT_WITH_GAP);
  var currentX = CLOUD_X;
  var currentY = CLOUD_Y + (FONT_WITH_GAP * 2) + FONT_WITH_GAP + BAR_HEIGHT;
  for (var i = 0, currentBarHeight, finalYmargin; i < names.length; i++) {
    currentX += BAR_GAP;
    currentBarHeight = (times[i] * BAR_HEIGHT / maxTime);
    finalYmargin = currentY - BAR_HEIGHT + (BAR_HEIGHT - currentBarHeight);
    names[i] === BAR_YOU_TEXT ? ctx.fillStyle = BAR_YOU_COLOR : ctx.fillStyle = getRandomBlueColor();
    ctx.fillRect(currentX, finalYmargin, BAR_WIDTH, currentBarHeight);
    ctx.fillStyle = CLOUD_FONT_COLOR;
    ctx.fillText(names[i], currentX, currentY + GAP);
    ctx.fillText(Math.floor(times[i]), currentX, finalYmargin - CLOUD_FONT_SIZE);
    currentX += BAR_WIDTH;
  }
};
