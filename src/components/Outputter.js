import React, {useState} from "react"

function Outputter(props) {

    const[selection, setSelection] = useState("")

    const handlePushed = selection => {
        setSelection(props.items[Math.floor(Math.random() * props.items.length)])
        console.log(selection)
    }

    return(
        <div className="window">
            <h2>Recommendation</h2>
            <div className="window">
                <h1>{selection}</h1>
            </div>
            {props.items.length > 0 ? <button className="btn btn-success" onClick={() => handlePushed()}>Recommend!</button> : <button className="btn btn-danger">Add an item to the list!</button>}
            
        </div>
    )
}

export default Outputter