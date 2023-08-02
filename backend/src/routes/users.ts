import { Router } from 'express'
import { usersController } from '../controllers/users'
import { authMiddleware } from 'middlewares/auth'
const userRoutes = Router()

userRoutes.get('/', authMiddleware, usersController.getAll)
userRoutes.get('/:id', authMiddleware, usersController.get)

userRoutes.post('/', authMiddleware, usersController.create)

userRoutes.delete('/:id', authMiddleware, usersController.delete)

userRoutes.patch('/:id', authMiddleware, usersController.update)

export { userRoutes }
