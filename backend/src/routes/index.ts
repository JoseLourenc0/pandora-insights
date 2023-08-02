import { Router } from "express";
import { itemRoutes } from "./items";
import { userRoutes } from "./users";
import { authRoutes } from "./auth";

const apiRoutes = Router()

apiRoutes.use('/auth', authRoutes)
apiRoutes.use('/items', itemRoutes)
apiRoutes.use('/users', userRoutes)

export { apiRoutes }
