import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Abilities from './abilities.js';


const Portraits = () => {
    const [weaponResults, setWeaponResults] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        axios.get('weapons')
            .then((response) => {
                length = response.data.data.length;
                setWeaponResults(response.data.data);
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
            <FaArrowAltCircleLeft className='leftArrow' id='leftArrowPortraits' onClick={prevSlide} />
            <FaArrowAltCircleRight className='rightArrow' id='rightArrowPortraits' onClick={nextSlide} />
            <section className='slider'>
                {weaponResults.map((element, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (
                                <div className='weaponContainer'>
                                    <h1 className='weaponName'>
                                        {weaponResults[current].displayName}
                                    </h1>
                                    <img src={weaponResults[current].displayIcon} className='weaponPhoto' alt={weaponResults[current].displayName} />
                                    <div>
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