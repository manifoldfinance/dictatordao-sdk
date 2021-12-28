
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dictatordao-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dictatordao-sdk.cjs.development.js')
}
