import React from "react";
import InventoryItem from "./InventoryItem"
import OutputWindow from "./OutputWindow"
import Adder from "./Adder"

function Tools(props) {

    return (
        <div className="row full">
            <OutputWindow items={props.items}/>
            <section className="col-md-4 window window-bottom">
                    {/* <Remover handleRemove={props.handleRemove} items={props.items}/> */}
                    
                    <hr></hr><h2>List</h2><p>(Click an item to delete)</p><hr></hr>
                    <ul>
                    {props.items.map(item => (                       
                        <InventoryItem item={item} handleChange={props.handleChange} handleRemove={props.handleRemove}/>    
                    ) )}
                    </ul>

                    <Adder handleAdd={props.handleAdd}/>

            </section>
        </div>
    )
}

export default Tools