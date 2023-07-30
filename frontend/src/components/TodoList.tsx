import React, {useState, useEffect} from 'react'
import { itemsAPI } from '@services/api/items'
import { Item } from 'models/items.model'

export const TodoList = () => {

    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const items = await itemsAPI.getAll()
        setItems(items)
        console.log(items)
    }

    return (
        <div>
            {items.map((item) => <div key={item.id}>{item.name}</div>)}
        </div>
    )
}
