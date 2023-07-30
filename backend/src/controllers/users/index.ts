import { Request, Response } from "express"
import { User } from "@models/db/User.model"
import { generateHash } from "services/sec/bcrypt"

export const usersController = {
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            if (!id) return res.send({ message: 'Required data not sent' })
            const user = await User.findById(id, {__v:0})
            return res.send(user)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getAll: async (req: Request, res: Response) => {
        const items = await User.find({}, {__v:0})
        return res.send(items)
    },
    create: async (req: Request, res: Response) => {
        try {
            const { name, username, password } = req.body

            if (!username || !password) return res.send({ message: 'Required data not sent' })

            const encryptedPassword = await generateHash(password)
    
            const user = new User({
                name,
                username,
                password: encryptedPassword
            })
            const result = await user.save()
            return res.send(result)
        } catch (error) {
            console.error(error)
            return res.status(500).send(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        if (!id) return res.send({ message: 'Required data not sent' })

        const item = await User.findById(id)
        if (!item) return res.send({ message: 'Not found any reg with given id' })

        const result = await item?.deleteOne()
        return res.send(result)
    },
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, username, password } = req.body
        if (!id || !(name || username || password)) return res.send({ message: 'Required data not sent' })

        const item = await User.findById(id)
        if (!item) return res.send({ message: 'Not found any reg with given id' })

        if (password) {
            const newPass = await generateHash(password)
            await item.updateOne({ password: newPass })
        }

        const result = await item.updateOne({name, username})
        return res.send(result)
    },
}
