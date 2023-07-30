import { Schema, model } from "mongoose"

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

export const Item = model('item', ItemSchema)
