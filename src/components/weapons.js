import axios from 'axios';
import React, { useState, useEffect } from 'react';
import weaponsDummyData from './weaponsDummyData.json';

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
             {weaponsDummyData.map((element) =>
                <div>
                  {element.displayName}
                  <img src={element.skins[0].displayIcon}></img>
                    <img src={element.displayIcon} className='weapon'></img>
                </div>)}
            {/* {weaponResults.map((element) =>
                <div>
                  
                    <img src={element.displayIcon} className='weapon'></img>
                </div>)} */}
        </div>
    )
};


export default Weapons;