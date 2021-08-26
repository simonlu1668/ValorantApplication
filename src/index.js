import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title.js'
import Portraits from './components/portraits.js';

function App() {
    const [currentlySelected, setCurrentlySelected] = useState(0);
    return (
        <div>
            <Title 
            currentlySelected = {currentlySelected}
            setCurrentlySelected = {setCurrentlySelected}/>
            {currentlySelected === 'characterSelect' ? <Portraits/> : null }
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('app'));