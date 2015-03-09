'use strict';

var requireFrom = require('require-from'),
    assign = Object.assign || require('object.assign');


module.exports = function (fromDir, requirefn) {
  requirefn = requirefn || global.require;

  var require = function require(moduleId) {
    return requirefn(require.resolve(module));
  };

  assign(require, requirefn, {
    resolve: resolveFrom.bind(null, fromDir)
  });

  return require;
};
