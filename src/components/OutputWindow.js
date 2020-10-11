import React from "react"
import Outputter from "./Outputter"

function OutputWindow(props) {

    return (
        <section className="col-md-7" id="outputSection">
            <Outputter items={props.items} isPushed={false}/>
        </section>
    )
}

export default OutputWindow