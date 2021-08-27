import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Weapons = () => {
    const [weaponResults, setWeaponResults] = useState([]);

    useEffect(() => {
        axios.get('weapons')
            .then((response) => {
                setWeaponResults(response.data.data);
            })
    }, []);

    return (
        <div className='gridContainer'>
            {weaponResults.map((element) =>
                <div>
                    <img src={element.displayIcon} className='weapon'></img>
                </div>)}
        </div>
    )
};


export default Weapons;