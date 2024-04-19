import React from 'react';
import { CgProfile } from 'react-icons/cg';
import"./MainHeader.css"
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { useAuth } from '../../context/AuthContext';

const MainHeader = () => {
    const navigate= useNavigate()

    const {currentUser}= useAuth() || {}
    const {displayName}= currentUser || {}

    return (
        <div className='mainHeader'>
            <div className="mainHeader__container">
                <div className="mainHeader__container__search">
                    <input type="text" placeholder='search' />
                </div>
                <div className="mainHeader__container__link">
                    <Link className="mainHeader__container__link__item" to="/home">Home</Link>
                    <Link className="mainHeader__container__link__item" to="/loan">Loan</Link>
                    <Link className="mainHeader__container__link__item" to="/crowdsourcing">Crowd Sourcing</Link>
                </div>
                <div className="mainHeader__container__profile">
                    {
                        displayName ? <CgProfile onClick={()=>navigate('/profile')} className='icon'></CgProfile> :<h3 onClick={()=>navigate('/login')}>Login</h3> 
                    }
                    
                   
                </div>
            </div>
        </div>
    );
};

export default MainHeader;