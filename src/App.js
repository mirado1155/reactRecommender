import React from 'react'
import Display from './components/Display';
import Tools from './components/Tools';

function App() {

    let items = ["One", "Two", "Three", "Four", "Five", "Six"]

    return(
        <Display items={items}/>
    )
}

export default App
