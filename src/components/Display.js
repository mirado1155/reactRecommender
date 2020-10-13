import React, {useState} from "react"
import Tools from "./Tools"

function Display() {

    const[items, modifyItems] = useState([])

    const handleAdd = item => {
        if(item.trim()) {
            modifyItems([...items, item])
        }
    }

    const handleRemove = itemName => {
        let newItems = [...items]
        console.log("before splice: " + newItems)
        newItems.splice(items.indexOf(itemName), 1)
        modifyItems(newItems)
        console.log("after modify items: " + newItems)
    }

    console.log("after handleRemove " + items)

    return (
        <Tools items={items} handleAdd={handleAdd} handleRemove={handleRemove}/>
    )
}

export default Display

//