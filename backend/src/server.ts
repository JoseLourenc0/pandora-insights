import express, { Request, Response } from 'express'
import cors from 'cors'

import { startDBConnection } from './services/db/setup'
import { apiRoutes } from './routes'

startDBConnection()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
// routes
app.use('/api', apiRoutes)

app.get('/status', (req,res) => {
    res.send({
        message: 'Hello'
    })
})

app.use((req, res, next) => {
    const err = { message: 'Route not found', status: 404 }
    next(err)
})

app.use((error: any, req: Request, res: Response) => {
    return res.status(error.status || 500).send({
        error
    })
})


export { app }
