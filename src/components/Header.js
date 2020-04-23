import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return <h1 className="title"><Link to='/'>Special Test Guide</Link></h1>;
}