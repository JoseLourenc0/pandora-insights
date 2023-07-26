import { NextFunction, Request, Response } from "express"
import { Item } from "@models/db/Item.model"

export const itemsController = {
    get: async (req: Request, res: Response) => {
        const { id } = req.params
        if (!id) return res.send({ message: 'Required data not sent' })
        const items = await Item.findById(id, {__v:0})
        return res.send(items)
    },
    getAll: async (req: Request, res: Response) => {
        const items = await Item.find({}, {__v:0})
        return res.send(items)
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        const { name, completed } = req.body

        if (!name || ![false, true].includes(completed)) return res.send({ message: 'Required data not sent' })

        const item = new Item({
            name,
            completed
        })
        const result = await item.save()
        return res.send(result)
    },
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        if (!id) return res.send({ message: 'Required data not sent' })

        const item = await Item.findById(id)
        if (!item) return res.send({ message: 'Not found any reg with given id' })

        const result = await item?.deleteOne()
        return res.send(result)
    },
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, completed } = req.body
        if (!id || !(name || completed)) return res.send({ message: 'Required data not sent' })

        const item = await Item.findById(id)
        if (!item) return res.send({ message: 'Not found any reg with given id' })

        const result = await item.updateOne({name, completed})
        return res.send(result)
    },
}
