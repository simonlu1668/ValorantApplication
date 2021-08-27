import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Maps = () => {
    const [mapResults, setMapResults] = useState([]);
    const [current, setCurrent] = useState(0);
    const [currentMapName, setCurrentMapName] = useState('Ascent')

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setCurrentMapName(current === length - 1 ? mapResults[0].displayName : mapResults[current + 1].displayName);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setCurrentMapName(current === 0 ? mapResults[length - 1].displayName : mapResults[current - 1].displayName);
    }

    useEffect(() => {
        axios.get('maps')
            .then((response) => {
                length = response.data.data.length;
                setMapResults(response.data.data);
            })
    }, []);

    return (
        <div>
            <section className='slider'>
                <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} />

                {mapResults.map((element, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (
                                <div>
                                    <img src={element.splash} className='map' alt={element.displayName} />
                                    <div class='map_overlay'>
                                        {currentMapName}
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


export default Maps;