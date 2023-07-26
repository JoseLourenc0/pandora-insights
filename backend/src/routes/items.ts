import { Router } from 'express'
import { itemsController } from '../controllers/items'
const itemRoutes = Router()

itemRoutes.get('/', itemsController.getAll)
itemRoutes.get('/:id', itemsController.get)

itemRoutes.post('/', itemsController.create)

itemRoutes.delete('/:id', itemsController.delete)

itemRoutes.patch('/:id', itemsController.update)

export { itemRoutes }
