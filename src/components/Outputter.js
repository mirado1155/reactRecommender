import React, {useState} from "react"

function Outputter(props) {

    const[isPushed, setPushed] = useState(false)

    

    return(
        <div className="window">
                <h1>{props.isPushed ? props.selection : ""}</h1>
        </div>
    )
}

export default Outputter