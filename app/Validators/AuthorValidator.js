'use strict'

class AuthorValidator {
  get rules () {
    return {
      firstName: 'required|string',
      lastName: 'required|string',
      birthday: 'required|date'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = AuthorValidator
