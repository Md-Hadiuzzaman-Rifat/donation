import React from 'react';
import LoanBox from '../LoanBox/LoanBox';
import "./Loan.css"

const Loan = () => {
    return (
        <div className='loan'>
            <div className="container">
            <LoanBox></LoanBox>
            </div>
        </div>
    );
};

export default Loan;