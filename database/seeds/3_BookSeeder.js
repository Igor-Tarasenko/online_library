'use strict'

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class BookSeeder {
  async run () {
    const usersIds = await User.ids();
    await Promise.all(usersIds.map( user_id =>
      user_id % 2 === 0 ? Factory.model('App/Models/Book').create({ user_id })
        : Factory.model('App/Models/Book').create()
    ))
  }
}

module.exports = BookSeeder
