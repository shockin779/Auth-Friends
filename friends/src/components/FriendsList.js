import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../axiosWithAuth';
import {PacmanLoader} from 'react-spinners';
import Friend from './Friend';

import './FriendsList.css';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getFriends = async () => {
            axiosWithAuth().get('/friends')
                .then(res => {
                    setFriends(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    setIsLoading(false);
                    console.log(err.message);
                })
        }

        getFriends();
    },[])

    return (
        <div className='friends-wrapper'>
            {
                friends.map(friend => <Friend person={friend} key={friend.id} />)
            }
            {isLoading ? <div className='pacman-loader'><PacmanLoader color={'#36D7B7'} size={60} /></div> : null}
        </div>
    )
}

export default FriendsList;