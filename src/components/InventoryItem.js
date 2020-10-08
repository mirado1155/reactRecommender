import { objectExpression } from "@babel/types"
import React from "react"

function InventoryItem(props) {
    return (
        <div>
            <input type="checkbox" id={props.item} name={props.item} value={props.item}/>
            <label for={props.item}>{props.item}</label>
        </div>
    )
}

export default InventoryItem