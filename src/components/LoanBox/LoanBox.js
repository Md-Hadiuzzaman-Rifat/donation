import React from 'react';
import { CgProfile } from "react-icons/cg";
import "./LoanBox.css"
import {useNavigate} from "react-router-dom"

const LoanBox = ({loan}) => {
    const navigate= useNavigate()

    const {name, amount, cause, description, email, uid, _id}= loan || {}
    
    const handleForm=()=>{
        navigate(`/offerLoan/${_id}`)
    }

    return (
        <div className='loanBox'>
            <div className="loanBox__container">
                <div className='loanBox__topSection'>
                    <div className='loanBox__topSection__person'>
                    <CgProfile className='icon'/>
                        {name?.toUpperCase()} : {uid}
                    </div>
                    <div className='loanBox__topSection__rating'>
                        <button className="btn-semi-green">Rating: 5 star</button>
                        <button onClick={()=>navigate('/profile/applyfor')} className="btn-semi-green">Message</button>
                    </div>
                </div>
                <div className="loanBox__middleSection">
                    <h3>{cause?.toUpperCase()}</h3>
                </div>
                <div className="loanBox__bottomSection">
                    <div></div>
                    {/* <button className="btn-semi-green">Expected Payback Time: 30 days</button> */}
                    <div className="loanBox__bottomSection__buttonGroup">
                    <button onClick={handleForm} className="btn-semi-green">Offer Loan</button>
                    <button className="btn-semi-green">Lend {amount}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanBox;