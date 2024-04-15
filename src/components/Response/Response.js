import React, { useEffect, useState } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

const Response = () => {
    const [responses, setResponses]= useState([])
    const [loanPost, setLoanPost]= useState({})
    const params= useParams()
    const {id:loanId} = params || {}
    
    useEffect(()=>{
            fetch(`http://localhost:2020/singleLoan/${loanId}`)
            .then(res=>res.json())
            .then(data=>setLoanPost(data))
    },[loanId])
    useEffect(()=>{
        fetch(`http://localhost:2020/responses/${loanId}`)
            .then(res=>res.json())
            .then(data=>setResponses(data))
    },[loanId])

    console.log(responses);
    console.log(loanPost);


    return (
        <ProfileLayout>
            <h2>This is Response</h2>
        </ProfileLayout>
    );
};

export default Response;