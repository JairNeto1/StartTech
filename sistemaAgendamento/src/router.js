import { Router } from 'express'
import User ffrom './app/models/User'

const routes = New Router();

routes.get('/' async (req, res) => {
  const user =  await User.create ({
    name: 'Douglas',
    email: 'douglas@email.com',
    password_hash:'123456',
  })
  return res.json(user);

})

export default routes