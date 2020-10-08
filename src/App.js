import React from 'react'
import Display from './components/Display';
import Tools from './components/Tools';

function App() {

    let items = ["One", "Two", "Three"]

    return(
        <div class="row">
            <section id="mainWindow" class="col-sm-7">
                <Display items={items}/>
            </section>

            <section id="tools" class="col-sm-4">
                <Tools items={items}/>
            </section>
        </div>
    )
}

export default App
