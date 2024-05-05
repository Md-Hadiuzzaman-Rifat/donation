import React from 'react';
import "./InformationBox.css"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const InformationBox = ({data}) => {
    const {amount, cause, description, email, name, _id, uid}= data || {}
    return (
        <div className='informationBox'>
        <div className="informationBox__container">
            <div className='informationBox__topSection'>
                <div className='informationBox__topSection__person'>
                <CgProfile className='icon'/> 
                <span>Loan Id:</span>
                <Link to={`response/${_id}`}>{_id}</Link>
                </div>
                <div className='informationBox__topSection__rating'>
                    <h3>Applied for the reason : {cause}</h3>
                    <h3>Need Amount: {amount} Taka</h3>
                    <div style={{display:"flex", gap:"1rem"}}>
                        <h3>Description: </h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default InformationBox;


