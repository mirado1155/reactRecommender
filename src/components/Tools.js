import React, { useState } from "react";
import InventoryItem from "./InventoryItem"
import OutputWindow from "./OutputWindow"
import Adder from "./Adder"

function Tools(props) {

    return (
        <div className="row full">
            <OutputWindow items={props.items}/>
            <section className="col-sm-4 window">

                    <button id="removeButton" onClick={() => props.handleRemove(props.items.name)}>Remove</button>

                    {props.items.map(item => (
                        <div>
                            <InventoryItem item={item}/>
                        </div>
                    ) )}

                    <Adder handleAdd={props.handleAdd}/>

            </section>
        </div>
    )
}

export default Tools