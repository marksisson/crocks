/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../helpers/curry')

const isFunction = require('../predicates/isFunction')

function option(x, m) {
  if(!(m && isFunction(m.option))) {
    throw new TypeError('option: Last argument must be a Maybe')
  }

  return m.option(x)
}

module.exports = curry(option)
