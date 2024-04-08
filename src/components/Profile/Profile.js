import React from 'react';
import "./Porfile.css"
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const {logout}= useAuth()

    const handleLogout=()=>{
        logout()
    }

    return (
        <div className='profile'>
            <div className="profile__container">

                <div className="profile__left">
                        <h3>Apply For</h3>
                        <h3>Response</h3>
                        <h3 onClick={handleLogout}>Logout</h3>
                    </div>
                <div className="profile__right">
                    
                    </div>

            </div>
        </div>
    );
};

export default Profile;