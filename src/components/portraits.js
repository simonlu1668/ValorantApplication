import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Portraits = () => {
    const [portraitResults, setPortraitResults] = useState([]);

    useEffect(() => {
        axios.get('characterPortaits')
            .then((response) => {
                setPortraitResults(response.data.data);
            })
    }, []);

    return (
        <div>
            {portraitResults.map((element) =>
                <div className='characterContainer'>
                    <img src={element.displayIcon} className='portrait'></img>

                </div>)}
        </div>

    )
};


export default Portraits;