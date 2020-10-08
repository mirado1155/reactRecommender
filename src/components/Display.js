import React from "react"

function Display(props) {
    let itemNumber = 0;

    return (
        <div id="result">
            <p>{props.items}</p>
        </div>

    )
}

export default Display