'use strict'

class UserValidator {
  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = UserValidator
