const Route = use('Route')

// Route.get('users', 'UserController.index').as('users.index')
// Route.post('users', 'UserController.store').as('users.store')
// Route.get('users/:id', 'UserController.show').as('users.show')
// Route.put('users/:id', 'UserController.update').as('users.update')
// Route.delete('users/:id', 'UserController.destroy').as('users.destroy')

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([[['users.store', 'users.update'],['UserValidator']]]));
Route.resource('books', 'BookController')
  .apiOnly()
  .validator(new Map([[['books.store', 'books.update'],['BookValidator']]]));
Route.resource('authors', 'AuthorController')
  .apiOnly()
  .validator(new Map([[['authors.store', 'authors.update'],['AuthorValidator']]]));
