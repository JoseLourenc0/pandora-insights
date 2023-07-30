import { Router } from "express";
import { itemRoutes } from "./items";
import { userRoutes } from "./users";

const apiRoutes = Router()

apiRoutes.use('/items', itemRoutes)
apiRoutes.use('/users', userRoutes)

export { apiRoutes }
