import React, {useState} from "react"
import Tools from "./Tools"

function Display() {

    const[items, modifyItems] = useState([])
    let itemsLength = items.length
    const[count, setCount] = useState(itemsLength)

    const handleAdd = item => {
        modifyItems([...items, item])
        setCount(count + 1)
    }

    const handleRemove = itemName => {
        let newItems = items
        newItems.splice(items.indexOf(itemName), 1)
        console.log(newItems)
        modifyItems(newItems)
    }

    return (
        <Tools items={items} handleAdd={handleAdd} handleRemove={handleRemove}/>
    )
}

export default Display

//