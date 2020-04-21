import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import selectSystem from '../data/select-system';

const StyledLink = styled(Link)`
    display: block;
`;

export default function Exercises(props) {
    const file = selectSystem(props.system);

    const exercisesList = file.map((exercises) => {
        return (
            <StyledLink to={location => `${location.pathname}${exercises.URL}`} className='link' key={exercises.Name}>{exercises.Name}</StyledLink>
        );
    });

    return (
        <>
            <h2>{props.system}</h2>
            {exercisesList}
        </>
    );
}