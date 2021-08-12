import User ffrom '../models/User';

class UserControler {
  async store(req, res, next) {

    const userExists = await User.findOne({{
      where: {email: req.body.email}
    }})

    if (userExists) {
      retur res.status(400).json({
        error: 'Usuário já Cadastrtado'
      })
    }

    const {id, name, email, provider} = await User.create (req.body)
    return res.json(user)
  }
}

export default new UserControler({
  id,
  name,
  email,
  provider
})
