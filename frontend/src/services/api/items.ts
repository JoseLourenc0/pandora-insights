import { api } from './base'
import { Item } from 'models/items.model'

const getAll: () => Promise<Item[]> = async () => {
    try {
        const { data } = await api.get('/items')
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const itemsAPI = {
    getAll
}
