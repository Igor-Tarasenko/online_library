'use strict'
const User = use('App/Models/User')

class UserController {
  constructor () {
    this.fields = ['name', 'email', 'password', 'registration_date']
  }
  async index () {
    return User.all();
  }
  async show ({ params }) {
    return User.findOrFail(params.id);
  }
  async store ({ request, response }) {
    response.status(201);
    return User.create(request.only(this.fields));
  }
  async update ({ params, request }) {
    const user = await User.findOrFail(params.id);
    user.merge(request.only(this.fields));
    await user.save();
    return user;
  }
  async destroy ({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }
}

module.exports = UserController
