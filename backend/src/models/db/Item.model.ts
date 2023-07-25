import { Schema, model } from "mongoose"

const ItemSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
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
