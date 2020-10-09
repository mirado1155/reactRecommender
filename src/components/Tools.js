import React from "react";
import Display from "./Display"
import InventoryItem from "./InventoryItem"

function Tools(props) {
    return (
        <section class="col-sm-4">
            <form>
                <button id="removeButton">Remove</button>

                {props.items.map(item => (
                    <div>
                        <InventoryItem item={item}/>
                    </div>
                ) )}

                <input type="text"></input><br />
                <button id="addButton" onClick={<Display selection/>}>
                    Add!
                </button>
            </form>
        </section>
    )
}

export default Tools