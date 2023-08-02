import { Response } from "express"
import moment from "moment"

const buildDefaultErrorMessage = (error: any, res?: Response) => {
    console.error(`[ ${ moment().format('YYYY-MM-DD HH:mm:ss') } - ERROR LOG ]: `, error)
    const errorToString = error.toString()
    const bodyMessage = {
        error: errorToString, 
        status: 0 
    }

    if (!res) return bodyMessage

    return res.status(400).send(bodyMessage)
}

const returnUnauthorized = (res: Response, message: string) => res.status(401).send(buildDefaultErrorMessage(message))

const returnBadRequest = (res: Response, message?: string | any) => res.status(400).send(buildDefaultErrorMessage(message))

export {
    returnUnauthorized,
    returnBadRequest
}
