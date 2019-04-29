'use strict'

class UserValidator {
  get sanitizationRules () {
    return {
      email: 'normalize_email',
      registration_date: 'date'
    }
  }
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
