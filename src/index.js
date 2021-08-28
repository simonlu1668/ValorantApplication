import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title.js';
import Home from './components/home.js';
import Maps from './components/maps.js';
import Weapons from './components/weapons.js';
import Portraits from './components/portraits.js';

function App() {
    const [currentlySelected, setCurrentlySelected] = useState('homeSelect');

    return (
        <div>
            <Title
                currentlySelected={currentlySelected}
                setCurrentlySelected={setCurrentlySelected} />
            {currentlySelected === 'homeSelect' ? <Home/> : null}
            {currentlySelected === 'characterSelect' ? <Portraits /> : null}
            {currentlySelected === 'mapSelect' ? <Maps /> : null}
            {currentlySelected === 'weaponSelect' ? <Weapons /> : null}
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('app'));