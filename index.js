'use strict';

var resolveFrom = require('resolve-from'),
    assign = Object.assign || require('object.assign');


module.exports = function (fromDir, requirefn) {
  requirefn = requirefn || require;

  var req = function require(moduleId) {
    return requirefn(require.resolve(moduleId));
  };

  assign(req, requirefn, {
    resolve: resolveFrom.bind(null, fromDir)
  });

  return req;
};
