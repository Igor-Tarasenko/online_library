'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
  books () {
    return this.belongsToMany('App/Models/Book')
  }
}

module.exports = Author
