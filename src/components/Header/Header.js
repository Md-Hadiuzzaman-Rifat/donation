import React from 'react';
import { CgProfile } from 'react-icons/cg';
import"./Header.css"
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const navigate= useNavigate()

    const {currentUser}= useAuth() || {}
    const {displayName}= currentUser || {}

    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__container__image">
                    <img onClick={()=>navigate('/')} src="/resoruces/money.png" alt="" />
                </div>
                <div className="header__container__link">
                    <Link className="header__container__link__item" to="/home">Home</Link>
                    <Link className="header__container__link__item" to="/loan">Loan</Link>
                    <Link className="header__container__link__item" to="/crowdsourcing">Crowd Sourcing</Link>
                </div>
                <div className="header__container__profile">
                    {
                        displayName ? <CgProfile onClick={()=>navigate('/profile/about')} className='icon'></CgProfile> :(
                            <div className='header__container__login'>
                                <p onClick={()=>navigate('/login')}>Sign In</p> 
                                <button className='button button-signIn'>Join Us</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;