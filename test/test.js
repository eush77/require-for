'use strict';

var requireFor = require('../');

var test = require('tape');

var fs = require('fs'),
    path = require('path'),
    vm = require('vm');

var modulepath = path.join(__dirname, 'module');


test('requireFor(dir)', function (t) {
  var req = requireFor(modulepath);

  t.equal(typeof req, 'function', 'require');
  t.equal(typeof req.resolve, 'function', 'require.resolve');
  t.equal(req.cache, require.cache, 'require.cache');
  t.equal(req.main, require.main, 'require.main');
  t.equal(req.extensions, require.extensions, 'require.extensions');
  t.end();
});


test('requireFor(dir, requirefn)', function (t) {
  t.plan(1);

  requireFor(modulepath, function () {
    t.ok(true, 'custom require');
  })('./');
});


test('test in vm', function (t) {
  var script = fs.readFileSync(path.join(modulepath, 'index.js'));

  var sandbox = {
    require: requireFor(modulepath)
  };
  vm.runInNewContext(script, sandbox);

  t.equal(sandbox.foo(), 'foo', 'require from vm succeeded');
  t.end();
});
