"use strict";

export var touches = function (e) {
  return e.touches;
};

export var targetTouches = function (e) {
  return e.targetTouches;
};

export var changedTouches = function (e) {
  return e.changedTouches;
};

export var altKey = function (e) {
  return e.altKey;
};

export var metaKey = function (e) {
  return e.metaKey;
};

export var ctrlKey = function (e) {
  return e.ctrlKey;
};

export var shiftKey = function (e) {
  return e.shiftKey;
};
