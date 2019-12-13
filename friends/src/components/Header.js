import React from 'react';
import Nav from './Nav';

import './Header.css';

const Header = () => {
    return(
        <header className='site-header'>
            <h1>My Friends App</h1>
            <Nav />
        </header>
    )
}

export default Header;