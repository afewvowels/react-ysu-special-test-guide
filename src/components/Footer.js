import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    font-size: 0.75rem;
`;

export default function Footer() {
    return(<StyledFooter>&copy;2020 YSU</StyledFooter>);
}