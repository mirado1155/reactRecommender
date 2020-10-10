import React from "react";
import InventoryItem from "./InventoryItem"
import OutputWindow from "./OutputWindow"
import Adder from "./Adder"

function Tools(props) {

    return (
        <div className="row full">
            <OutputWindow items={props.items}/>
            <section className="col-md-4 window">
                    {/* <Remover handleRemove={props.handleRemove} items={props.items}/> */}
                    
                    <h2>List</h2><p>(Click to delete)</p><hr></hr>
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