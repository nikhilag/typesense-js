'use strict'

const RESOURCEPATH = '/collections'

class Collections {
  constructor (configuration) {
    this._configuration = configuration
  }

  static get RESOURCEPATH () {
    return RESOURCEPATH
  }
}

module.exports = Collections