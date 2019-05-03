'use strict'

class BookValidator {
  get sanitizationRules () {
    return {
      published_at: 'date|trim|strip_tags',
      user_id: 'to_int|trim|strip_tags'
    }
  }
  get rules () {
    return {
      name: 'required|max:255',
      published_at: 'required|date|max:255',
      user_id: 'integer|max:255'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = BookValidator
