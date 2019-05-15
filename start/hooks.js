const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Validator = use('Validator')
  const Database = use('Database')

  const correctId = async (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value && 0) {
      return message
    }
    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()
    if (!row) {
      throw message
    }
  };
  Validator.extend('exists', correctId)
});
