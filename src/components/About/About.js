import React, { useEffect } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import "./About.css"
import { useAuth } from '../../context/AuthContext';
import MainHeader from '../MainHeader/MainHeader';

const About = () => {
    const {currentUser}= useAuth()
    const {email, uid, displayName}= currentUser || {}

    return (
        <div>
            <MainHeader></MainHeader>
        <ProfileLayout>
            
            <div className="about">
                <div className="about__container">
                    <div className="about__Content">
                        <h3>User Name : {displayName}</h3>
                        <h4>User Email : {email}</h4>
                        <p>User ID : {uid}</p>
                    </div>
                </div>
            </div>
        </ProfileLayout>
        </div>
    );
};

export default About;