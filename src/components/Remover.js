import React from "react"

function Remover(props) {

    return (
        <button id="removeButton" onClick={() => props.handleRemove(props.items.name)}>Remove</button>
    )
}

export default Remover