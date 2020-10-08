import React from "react"
import Display from "./Display"
import Tools from "./Tools"

function DisplayScreen() {

    return(
        <div class="row">
            <section id="mainWindow" class="col-sm-7">
                <Display />
            </section>

            <section id="tools" class="col-sm-4">
                <Tools />
            </section>
        </div>
    )
    
}

export default DisplayScreen
