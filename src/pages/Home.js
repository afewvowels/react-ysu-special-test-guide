import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import systems from '../data/systems';

const StyledLink = styled(Link)`
    display: block;
`;

export default function Home() {
    const namesArr = systems.systems;
    return(
        <div className='listBox'>
            {
                namesArr.map((name) => {
                    return (
                        <StyledLink to={name[1]} className='link' key={name[1]}>{name[0]}</StyledLink>
                    );
                })
            }
        </div>
    );
}