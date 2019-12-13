import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='site-nav'>
            <Link to='/add-friend'>Add Friend</Link>
            <Link to='/friends-list'>Friends List</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}

export default Nav;