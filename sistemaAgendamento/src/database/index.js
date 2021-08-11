import Sequelize from 'sequelize'
import User from '..user/app/models/User'
import databaseConfifg from '../config/database'

const models = [user]

class Database {
  contructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfifg)
    models.map(model => model.init(this.connection))
  }
}

export default new Database()
