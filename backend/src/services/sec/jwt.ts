import { verify, sign } from 'jsonwebtoken'
import { config } from 'dotenv'
import { User } from '@models/interfaces/User'

config()

const {
    JWT_KEY,
    JWT_TIME_EXP
} = process.env

export class Jwt {

    private jwtKey = JWT_KEY || 'jwtKey'
    private jwtTimeExp = Number(JWT_TIME_EXP) || 3600

    verify (token: string) {
        return verify(token, this.jwtKey)
    }

    sign(userInfo: Partial<User>) {
        return sign({...userInfo}, this.jwtKey, {
            expiresIn: this.jwtTimeExp
        })
    }
}
