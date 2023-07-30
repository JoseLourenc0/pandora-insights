import { Router } from 'express'
import { usersController } from '../controllers/users'
const userRoutes = Router()

userRoutes.get('/', usersController.getAll)
userRoutes.get('/:id', usersController.get)

userRoutes.post('/', usersController.create)

userRoutes.delete('/:id', usersController.delete)

userRoutes.patch('/:id', usersController.update)

export { userRoutes }
