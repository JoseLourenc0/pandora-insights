import { hash } from 'bcrypt'

const SALT_ROUNDS = process.env.SALT_ROUNDS || 8

const generateHash = (pass: string) => new Promise((resolve,reject) => hash(pass, SALT_ROUNDS, (err, encrypted) => {
    if (err) return reject(err)
    resolve(encrypted)
}))

export {
    generateHash
}
