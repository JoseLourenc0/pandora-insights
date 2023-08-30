import { describe, expect, it } from "vitest"
import { Jwt } from './jwt'

describe('JwtService', () => {
    it('Should verify a valid token', () => {
        const fakeUser = {
            _id: '_______1',
            name: 'Cool User',
            username: 'cool_user',
            password: 'cool_password'
        }

        const jwt = new Jwt()
        const token = jwt.sign(fakeUser)
        expect(jwt.verify(token)).toMatchObject(fakeUser)
    })
})
