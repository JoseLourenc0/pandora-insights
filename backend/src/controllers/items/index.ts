import { Request, Response } from "express"

const items = [
    {
        id: 1,
        name: 'making api',
        completed: false
    }
]

export const itemsController = {
    getAll: (req: Request, res: Response) => {
        return res.send(items)
    }
}
