import React, { useState } from "react";

function Adder(props) {
    const [value, setValue] = useState("")
    return(
        <div>
            <input onChange={event => setValue(event.target.value)} type="text"></input><br />
            <button id="addButton" onClick={() => props.handleAdd(value)}>
                Add!
            </button>
        </div>
    )
}

export default Adder