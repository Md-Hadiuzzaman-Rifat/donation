import React, { useEffect, useState } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import InformationBox from '../InformationBox/InformationBox';
import ResponseBox from '../ResponseBox/ResponseBox';
import "./Response.css"
import MainHeader from '../MainHeader/MainHeader';
import InfoResponse from '../InfoResponse/InforResponse';
import { FaRegSadCry } from "react-icons/fa";


const Response = () => {
    const [responses, setResponses]= useState([])
    const [loanPost, setLoanPost]= useState({})
    const params= useParams()
    const {id:loanId} = params || {}
    
    useEffect(()=>{
            fetch(`https://rimon-nyxj.vercel.app/singleLoan/${loanId}`)
            .then(res=>res.json())
            .then(data=>setLoanPost(data))
    },[loanId])
    useEffect(()=>{
        fetch(`https://rimon-nyxj.vercel.app/responses/${loanId}`)
            .then(res=>res.json())
            .then(data=>setResponses(data))
    },[loanId])

    console.log(responses);
    
    
    return (
        <div className='response-main'>
            <MainHeader></MainHeader>
        <ProfileLayout>
            <h2>People Who Interested To Lend You Money</h2>
            <div className='response'>
                <div className="response__container">
                    <div className="response__post">
                        {
                            loanPost && <InfoResponse data={loanPost}/>
                        }
                    </div>
                    <div className="response__box">
                            {
                                responses?.length > 0 &&  responses.map(response=><ResponseBox data={response} key={response._id}/>)
                            }
                            {
                                responses?.length === 0 &&  (<div className='response-deny'>UnFortunately no one show you response...   <span><FaRegSadCry/></span></div>)
                            }
                    </div>
                </div>
            </div>
        </ProfileLayout>
        </div>
    );
};

export default Response;