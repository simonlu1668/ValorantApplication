import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Abilities from './abilities.js';


const Portraits = () => {
    const [characterResults, setCharacterResults] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        axios.get('characters')
            .then((response) => {
                length = response.data.data.length;
                setCharacterResults(response.data.data);
            })
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }




    return (
        <div>
            <FaArrowAltCircleLeft className='leftArrow'  id='leftArrowPortraits' onClick={prevSlide} />
            <FaArrowAltCircleRight className='rightArrow' id='rightArrowPortraits'onClick={nextSlide} />
            <section className='slider'>
                {characterResults.map((element, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (
                                <div className='characterContainer'>
                                    <img src={characterResults[current].displayIcon} className='portrait' alt={characterResults[current].displayName} />
                                    <div>
                                        <h1 className='characterName'>
                                            {characterResults[current].displayName}
                                        </h1>
                                        <div>
                                            {characterResults[current].description }
                                        </div>
                                        <Abilities
                                        characterResults = {characterResults}
                                        current = {current}/>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </section>

        </div>
    )
};


export default Portraits;