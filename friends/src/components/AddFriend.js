import React, { useState } from 'react';

import './AddFriend.css';
import { axiosWithAuth } from '../axiosWithAuth';

const AddFriend = props => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFriend({...friend, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth().post('/friends', friend)
            .then(res => {
                setIsLoading(false);
                props.history.push('/friends-list')
            })
            .catch(err => console.log(err))

    }



    return (
        <form className='add-friend-form'>
            <input type='text' name='name' value={friend.name} onChange={handleInputChange} placeholder='Name'/>
            <input type='number' name='age' value={friend.age} onChange={handleInputChange} placeholder='Age'/>
            <input type='email' name='email' value={friend.email} onChange={handleInputChange} placeholder='Email'/>
            <button onClick={handleSubmit}>Add friend</button>
        </form>
    )
}

export default AddFriend;