import { Router } from "express";
import { itemRoutes } from "./items";

const apiRoutes = Router()

apiRoutes.use('/items', itemRoutes)

export { apiRoutes }
