'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorBookSchema extends Schema {
  up () {
    this.create('author_books', (table) => {
      table.increments()
      table.integer('author_id', 10).notNullable().unsigned()
      table.integer('book_id', 10).notNullable().unsigned()
      table.foreign('author_id').references('id').inTable('authors').onDelete('cascade')
      table.foreign('book_id').references('id').inTable('books').onDelete('cascade')
    })
  }

  down () {
    this.drop('author_books')
  }
}

module.exports = AuthorBookSchema
