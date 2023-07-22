import express from 'express'
import { apiRoutes } from './routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api', apiRoutes)

app.get('/status', (req,res) => {
    res.send({
        message: 'Hello'
    })
})

app.use('**', (req, res) => res.status(404).send({ status: 0, message: 'Route not found' }))

export { app }
