import React from 'react';
import { CgProfile } from "react-icons/cg";
import "./RequestBox.css"
import {useNavigate} from "react-router-dom"

const RequestBox = () => {
    const navigate= useNavigate()

    const handleForm=()=>{
        navigate('/offerLoan')
    }

    return (
        <div className='requestBox'>
            <div className="requestBox__container">
                <div className='requestBox__topSection'>
                    <div className='requestBox__topSection__person'>
                    <CgProfile className='icon'/>

                        Md Hadiuzzamana Rifat 01910803372
                    </div>
                    <div className='requestBox__topSection__rating'>
                        <button className="btn-semi-green">Rating: 5 star</button>
                        <button className="btn-semi-green">Message</button>
                    </div>
                </div>
                <div className="requestBox__middleSection">
                    <h3>Need 500 tk for grocery supply</h3>
                </div>
                <div className="requestBox__bottomSection">
                    <button className="btn-semi-green">Expected Payback Time: 30 days</button>
                    <div className="requestBox__bottomSection__buttonGroup">
                    <button onClick={handleForm} className="btn-semi-green">Offer Loan</button>
                    <button className="btn-semi-green">Lend 500tk</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestBox;