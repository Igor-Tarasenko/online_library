'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
  authors () {
    return this.belongsToMany('App/Models/Author')
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Book
