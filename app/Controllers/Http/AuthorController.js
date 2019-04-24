'use strict'
const Author = use('App/Models/Author');

class AuthorController {
  constructor () {
    this.fields = ['firstName', 'lastName', 'birthday']
  }
  async index () {
    return Author.all();
  }
  async show ({ params }) {
    return Author.findOrFail(params.id);
  }
  async store ({ request, response }) {
    response.status(201);
    return Author.create(request.only(this.fields));
  }
  async update ({ params, request }) {
    const author = await Author.findOrFail(params.id);
    author.merge(request.only(this.fields));
    await author.save();
    return author;
  }
  async destroy ({ params }) {
    const author = await Author.findOrFail(params.id);
    await author.delete();
  }
}

module.exports = AuthorController
