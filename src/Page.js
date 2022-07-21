import { useState, useEffect } from 'react';

//I need to: get user info on mount of this component and display it. Also to include in stretch goals:: ability to edit this page 
function Page(){
    const defaultUser = {
        username: 'USERNAME',
        description: 'DESCRIPTION IS A LONGER STRING WOOOOOO',
        role: 'choice bt user, moderator, admin, superadmin',
    }
    const [user,setUser] = useState(defaultUser);
    return(
        <div>
            <h2 className='profile-viewer-header'>Welcome to {user.username}'s page!</h2>
            <p className='profile-description'>{user.description}</p>
            <h3 className='profile-role'>{user.username} is a(n) {user.role}</h3>
        </div>
    )
}

export default Page;