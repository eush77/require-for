[![npm](https://nodei.co/npm/require-for.png)](https://nodei.co/npm/require-for/)

# require-for

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Make a `require` object for a given path, that bases all `require()` and `require.resolve()` calls on that path.

Much like [resolve-from](http://npm.im/resolve-from), and in fact `requireFor(dir).resolve` is exactly that.

Such object can be passed to VM running some script enabling that script to `require` other modules, as in [nodei](http://npm.im/nodei).

[travis]: https://travis-ci.org/eush77/require-for
[travis-badge]: https://travis-ci.org/eush77/require-for.svg
[david]: https://david-dm.org/eush77/require-for
[david-badge]: https://david-dm.org/eush77/require-for.png

## Example

```js
var requiref = requireFor('./module');

requiref('./index.js')
//=> require('./module/index.js')

Object.keys(requiref)
//=> [ 'resolve', 'main', 'extensions', 'registerExtension', 'cache' ]
```

## API

### `requireFor(fromDir, [requirefn])`

Make a `require` object for `fromDir` directory. Use optional `requirefn` as a require function.

## Install

```
npm install require-for
```

## License

MIT
