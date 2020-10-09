import React from "react"
import Outputter from "./Outputter"

function OutputWindow(props) {

    let selection = props.items[Math.floor(Math.random() * props.items.length)].name;

    return (
        <section className="col-sm-7">
            <Outputter selection={selection} isPushed={false}/>
            
        </section>
    )
}

export default OutputWindow