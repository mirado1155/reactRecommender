import React, {useState} from "react"
import Tools from "./Tools"

function Display() {

    const[items, modifyItems] = useState
    (
        [
            {id: 0, name:"testaurant"}, 
            {id: 1, name:"secondaurant"}
        ]
    )
    let itemsLength = items.length
    const[count, setCount] = useState(itemsLength)

    console.log(count)

    const handleAdd = item => {
        modifyItems([...items, {id: 2, name: item}])
        setCount(count + 1)
        console.log(item)
    }

    function handleRemove(item) {
        modifyItems(()=> {
            let toDelete = items.indexOf({name:item})
            items.splice(toDelete, 1)
        })
    }


    return (
        <Tools items={items} handleAdd={handleAdd} handleRemove={handleRemove}/>
    )
}

export default Display

//