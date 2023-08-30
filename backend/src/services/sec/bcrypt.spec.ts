import { describe, expect, it } from 'vitest'
import { compare, generateHash } from './bcrypt'

describe('bcrypt Functions', () => {
    it('Should generate a hash and compare correctly', async () => {
        const pass = 'new_pass'

        const hash = await generateHash(pass)
        expect(hash).toBeTruthy()

        const isMatch = await compare(pass, String(hash))
        expect(isMatch).toBe(true)
    })

    it('should not match incorrect password', async () => {
        const password = 'secretpassword'
        const incorrectPassword = 'wrongpassword'

        const hash = await generateHash(password)
        expect(hash).toBeTruthy()

        const isMatch = await compare(incorrectPassword, String(hash))
        expect(isMatch).toBe(false)
    })
})
