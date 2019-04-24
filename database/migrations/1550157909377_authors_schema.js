'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorsSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.date('birthday').notNullable()
    })
  }

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorsSchema
