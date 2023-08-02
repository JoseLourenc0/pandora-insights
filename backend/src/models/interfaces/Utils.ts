import { Request } from 'express'
import { User } from './User'

export interface UserRequest extends Request {
    user?: {
        id: User['_id']
        name: User['name']
        username: User['username']
    }
}
