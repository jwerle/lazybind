
/**
 * Creates a function that accepts
 * the reciever as its first argument
 * and `n` number of arguments that
 * are bound to the function
 *
 * @api public
 * @param {Object} obj
 * @param {String} name
 */

module.exports = lazybind;
function lazybind (obj, name) {
  var fn = obj[name];
  return fn.call.bind(fn)
}
