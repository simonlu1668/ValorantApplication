import React, { useEffect } from 'react';

const Title = ({currentlySelected, setCurrentlySelected}) => {


    const clickedOn = (event) => {
        setCurrentlySelected(event.target.id);
    }

        return(
            <div>
                <h1 className='headerTitle'>
                    Valorant Guide
                </h1>
                <h3 className='headingsTitle'>
                    <div className='selectedFalse' id='mapSelect' onClick={clickedOn}>Maps</div>
                    <div className='selectedFalse' id='characterSelect' onClick={clickedOn}>Characters</div>
                <div className='selectedFalse' id='weaponSelect' onClick={clickedOn} >Weapons</div> 
                </h3>
            </div >
        )
};


export default Title;