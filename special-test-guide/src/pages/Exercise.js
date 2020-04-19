import React from 'react';

import selectSystem from '../data/select-system';

export default function Exercise(props) {
    const system = selectSystem(props.system);

    const exerciseInfo = system.find(element => element.Name == props.exerciseName);

    // const html = exerciseInfo.map((exercise) => {
    //     return (
    //         <div className='section' key={Object.key(exercise)}>
    //             <h4>{Object.key(exercise)}</h4>
    //             <p>{Object.value(exercise)}</p>
    //         </div>
    //     );
    // });

    return (
        <div class='listBox'>
            <h2>{props.system}</h2>
            <h3>{props.exerciseName}</h3>
            {/* {html} */}
            <p>{exerciseInfo.URL}</p>
        </div>
    );
};