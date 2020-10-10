import React, { useState } from "react";

function Adder(props) {
    const [value, setValue] = useState("")

    function handleAdd(value) {
        props.handleAdd(value)
        setValue("")
    }

    return(
        <div>
            <input onChange={event => setValue(event.target.value)} value={value} type="text"></input><br />
            <button className="btn btn-primary" id="addButton" onClick={() => handleAdd(value)}>
                Add!
            </button>
        </div>
    )
}

export default Adder