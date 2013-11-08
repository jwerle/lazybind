lazybind
========

Create functions that accept the receiver as its first argument and `n`
arguments after.

## install

```sh
$ npm install lazybind
```

## usage

```js
var lazybind = require('lazybind');
var a = [];
var push = lazybind(Array.prototype, 'push');
push(a, 1);
push(a, 2);
push(a, 3);
```

## license

MIT
