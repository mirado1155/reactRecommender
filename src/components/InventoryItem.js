import React from "react"

function InventoryItem(props) {

    function handleChange() {
        props.handleRemove(props.item)
    }

    return (
        <li onClick={handleChange}>{props.item}</li>
            
            /* <input type="checkbox" onChange={handleChange} name={props.item.name} value={props.item.id}/>
            <label htmlFor={props.item.id}>{props.item.name}</label> */
        
    )
}

export default InventoryItem