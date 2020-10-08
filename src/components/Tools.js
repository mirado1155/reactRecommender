import React from "react";
import InventoryItem from "./InventoryItem"

function Tools(props) {

    return (
        <div>
            
            <form>
                <button id="remove">Remove</button>

                {props.items.map(item => (
                    <div>
                        <InventoryItem item={item}/>
                    </div>
                ) )}

                <input type="text"></input><br />
                <button type="submit">Add!</button>
            </form>


        </div>
    )
}

export default Tools