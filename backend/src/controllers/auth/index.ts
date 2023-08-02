import { User } from "@models/db/User.model"
import { Request, Response } from "express"
import { compare } from "services/sec/bcrypt"
import { Jwt } from "services/sec/jwt"
import { returnBadRequest, returnUnauthorized } from "utils/errorHandling"

export const authController = {
    login: async (req: Request, res: Response) => {

        try{

            const {
                username,
                password
            } = req.body

            const user = await User.findOne({ username })
            console.log(user)
            if (!user) throw new Error('Login failed!')

            const {
                password: hash,
                name,
                _id
            } = user

            const match = await compare(password, hash)

            if(!match) return returnUnauthorized(res, 'Login failed!')

            const token = new Jwt().sign({ _id: _id.toString(), name, username, password })

            return res.send({
                status: 1,
                result: token
            })
        } catch(error) {
            return returnBadRequest(res, error)
        }
    },
}
