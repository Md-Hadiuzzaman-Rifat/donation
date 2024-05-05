import React from 'react';
import "./InfoResponse.css";
import { CgProfile } from "react-icons/cg";

const InfoResponse = ({data}) => {
    const {amount, cause, description, email, name, _id, uid}= data || {}
    return (
        <div className='infoResponse'>
        <div className="infoResponse__container">
            <div className='infoResponse__topSection'>
                <div className='infoResponse__topSection__person'>
                <CgProfile className='icon'/> 
                <span>Loan Id:</span>
                <p>{_id}</p>
                </div>
                <div className='infoResponse__topSection__rating'>
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

export default InfoResponse;


