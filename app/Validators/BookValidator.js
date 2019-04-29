'use strict'

class BookValidator {
  get sanitizationRules () {
    return {
      published_at: 'date',
      user_id: 'to_null'
    }
  }
  get rules () {
    return {
      name: 'required',
      published_at: 'required|date',
      user_id: 'integer'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = BookValidator
