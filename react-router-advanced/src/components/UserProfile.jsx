import React from 'react'; 
import {useParams} from 'react-router-dom' 

const UserProfile =() => {
    const {userid} = useParams(); 
    return(
        <div>
            <h2>User Profile</h2> 
            <p>Profile of user with id: {userid}</p>
        </div>
    )
} 
export default UserProfile;