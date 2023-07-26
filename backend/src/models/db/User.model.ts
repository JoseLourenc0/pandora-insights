
import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.set('timestamps', true)

export const User = model('user', userSchema)
