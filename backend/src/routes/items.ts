import { Router } from 'express'
import { itemsController } from '../controllers/items'
const itemRoutes = Router()

itemRoutes.get('/', itemsController.getAll)

export { itemRoutes }
