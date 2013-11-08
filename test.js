
var lazybind = require('./')
  , assert = require('assert')

var array = [1,2,3];
var obj = {
  foo: 'bar'
};


var push = lazybind(Array.prototype, 'push');
var call = lazybind(Function.prototype, 'call');
var hasOwn = lazybind(Object.prototype, 'hasOwnProperty');

assert('function' == typeof push);
assert('function' == typeof call);
assert('function' == typeof hasOwn);

assert(push(array, 4) == array.length);
assert(1 == call([].slice, array, 0, 1));
assert(true == hasOwn(obj, 'foo'));
