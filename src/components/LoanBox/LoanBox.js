import React from 'react';
import { CgProfile } from "react-icons/cg";
import "./LoanBox.css"

const LoanBox = () => {
    return (
        <div className='loanBox'>
            <div className="loanBox__container">
                <div className='loanBox__topSection'>
                    <div className='loanBox__topSection__person'>
                    <CgProfile className='icon'/>

                        Md Hadiuzzamana Rifat 01910803372
                    </div>
                    <div className='loanBox__topSection__rating'>
                        <button className="btn-semi-green">Rating: 5 star</button>
                        <button className="btn-semi-green">Message</button>
                    </div>
                </div>
                <div className="loanBox__middleSection">
                    <h3>Need 500 tk for grocery supply</h3>
                </div>
                <div className="loanBox__bottomSection">
                    <button className="btn-semi-green">Expected Payback Time: 30 days</button>
                    <div className="loanBox__bottomSection__buttonGroup">
                    <button className="btn-semi-green">View Details</button>
                    <button className="btn-semi-green">Lend 500tk</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanBox;