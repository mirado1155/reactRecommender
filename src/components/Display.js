import React from "react"
import Tools from "./Tools"
import InventoryItem from "./InventoryItem"

function Display(props) {

    let selection

    for (let i = 0; i < 15; i++) {
        selection = props.items[Math.floor((Math.random() * props.items.length))];
    }


    return (
        <div class="row full">
            <section id="mainWindow" class="col-sm-7">
                <h1>{selection}</h1>
            </section>
            <Tools items={props.items}/>
        </div>

    )
}

export default Display