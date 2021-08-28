import React from 'react';


const Abilities = ({ characterResults, current }) => {
    return (
        <table>
            {console.log(characterResults[current].abilities)}
            {characterResults[current].abilities.map((element) => (
                <div className='abilitiesContainer'>
                    <img src={element.displayIcon} style={{ width: '5vw' }}>

                    </img>
                    <th>
                        {element.displayName}
                    </th>
                    <tr>
                        <td>
                            {element.description}
                        </td>
                    </tr>
                </div>
            ))}
        </table>
    )
};


export default Abilities;