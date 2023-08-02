import { UserRequest } from "@models/interfaces/Utils";
import { NextFunction, Response } from "express";
import { Jwt } from "services/sec/jwt";
import { returnUnauthorized } from "utils/errorHandling";

export const authMiddleware = (req: UserRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(!token) throw new Error()
        const decode: any = new Jwt().verify(token)

        req.user = {
            id: decode.id,
            name: decode.name,
            username: decode.username
        }

        next()
    } catch (error) {
        return returnUnauthorized(res, 'Invalid Token')
    }
}
