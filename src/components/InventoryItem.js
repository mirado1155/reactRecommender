import React from "react"

function InventoryItem(props) {
    let id = "itemNumber" + props.item.id
    return (
        <div>
            <input type="checkbox" id={id} name={props.item.name} value={props.item.id}/>
            <label htmlFor={id}>{props.item.name}</label>
        </div>
    )
}

export default InventoryItem