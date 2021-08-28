import React, { useEffect } from 'react';

const Title = ({ currentlySelected, setCurrentlySelected }) => {


    const clickedOn = (clickedOnValue) => {
        setCurrentlySelected(clickedOnValue);
    }

    return (
        <div className='header'>
            <h1 className='headerTitle' onClick={()=>clickedOn('mapSelect')}>
                ValBuddy
            </h1>
            <h3>
                <div className='selectedFalse' id='homeSelect' onClick={()=>clickedOn('homeSelect')}>Home </div>
                <div className='selectedFalse' id='mapSelect' onClick={()=> clickedOn('mapSelect')}>Maps</div>
                <div className='selectedFalse' id='characterSelect' onClick={()=>clickedOn('characterSelect')}>Agents</div>
                <div className='selectedFalse' id='weaponSelect' onClick={()=>clickedOn('weaponSelect')} >Weapons</div>
            </h3>
        </div>
    )
};


export default Title;