import React from 'react';
import {Link , useNavigate} from "react-router-dom"
import { useAuth } from '../../context/AuthContext';


const ProfileLayout = ({children}) => {
    const {logout}= useAuth()

    return (
        <div className='profile'>
            <div className="profile__container">
                <div className="profile__left">
                        <Link to="/profile/about"><h3>About</h3></Link>
                        <Link to="/profile/applyFor"><h3>Apply For</h3></Link>
                        <h3 onClick={logout}>Logout</h3>
                    </div>
                <div className="profile__right">
                        {children}
                    </div>
            </div>
        </div>
    );
};

export default ProfileLayout;