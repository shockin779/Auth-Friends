import React from 'react';

import './Friend.css';

const Friend = props => {
    return (
        <div className='friend'>
            <h3>{props.person.name}</h3>
            <p>Age: {props.person.age}</p>
            <p>Email: {props.person.email}</p>
        </div>
    )
}

export default Friend;