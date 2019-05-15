'use strict'

class BookValidator {
  get sanitizationRules () {
    return {
      published_at: 'toDate|trim|stripTags',
      user_id: 'to_int|trim|stripTags'
    }
  }
  get rules () {
    return {
      name: 'required|max:255',
      published_at: 'required|date|max:255',
      user_id: 'integer|max:255|exists:users,id'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = BookValidator
