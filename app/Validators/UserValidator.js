'use strict'

class UserValidator {
  get sanitizationRules () {
    return {
      email: 'normalize_email|trim|strip_tags',
      registration_date: 'date|trim|strip_tags'
    }
  }
  get rules () {
    return {
      name: 'required|max:255',
      email: 'required|email|unique:users|max:255',
      password: 'required|max:255'
    }
  }
  get validateAll () {
    return true
  }
}

module.exports = UserValidator
