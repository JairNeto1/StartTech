import from sequelize, { Model } from 'sequelize';

class Users extends Model {
  static init(sequelize: Sequelize) {
    super.init({
        name: sequelize.STRING,
        email: sequelize.STRING,
        password_hash: sequelize.STRING,
        provider: sequelize.BOOLEAN,
    },{
        sequelize,
    })
  }
}

export default Users;