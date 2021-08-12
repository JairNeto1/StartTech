import { Router } from 'express'
import UserControler from '../app/controllers/UserControler'

const routes = New Router();

routes.post('/user', UserControllers.store)



export default routes