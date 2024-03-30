import React from 'react';
import { CgProfile } from 'react-icons/cg';
import"./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__container__search">
                    <input type="text" placeholder='search' />
                </div>
                <div className="header__container__link">
                    <Link className="header__container__link__item" to="/home">Home</Link>
                    <Link className="header__container__link__item" to="/loan">Loan</Link>
                    <Link className="header__container__link__item" to="/crowdsourcing">Crowd Sourcing</Link>
                </div>
                <div className="header__container__profile">
                    <CgProfile className='icon'></CgProfile>
                </div>
            </div>
        </div>
    );
};

export default Header;