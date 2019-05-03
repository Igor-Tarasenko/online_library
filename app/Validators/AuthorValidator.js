'use strict'

class AuthorValidator {
  get sanitizationRules () {
    return {
      birthday: 'date|trim|strip_tags'
    }
  }
  get rules () {
    return {
      firstName: 'required|string|max:255',
      lastName: 'required|string|max:255',
      birthday: 'required|date|max:255'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = AuthorValidator
