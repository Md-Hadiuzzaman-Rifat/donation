import React from 'react';
import { CgProfile } from "react-icons/cg";

const LoanBox = () => {
    return (
        <div className='loanBox'>
            <div className="container">
                <div className='loanBox__topSection'>
                    <div className='loanBox__topSection__person'>
                    <CgProfile />

                        Md Hadiuzzamana Rifat 01910803372
                    </div>
                    <div className='loanBox__topSection__rating'>
                        <button className='button'>Rating: 5 star</button>
                        <button className='button'>Message</button>
                    </div>
                </div>
                <div className="loanBox__middleSection">
                    <h3>Need 500 tk for grocery supply</h3>
                </div>
                <div className="loanBox__bottomSection">
                    <button className='button'>Expected Payback Time: 30 days</button>
                    <button className='button'>View Details</button>
                    <button className='button'>Lend 500tk</button>
                </div>
            </div>
        </div>
    );
};

export default LoanBox;