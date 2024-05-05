import React, { useEffect, useState } from "react";
import LoanBox from "../LoanBox/LoanBox";
import "./Loan.css";
import {useNavigate} from "react-router-dom"
import MainHeader from "../MainHeader/MainHeader";

const Loan = () => {
  const navigate= useNavigate()
  const [allLoans, setAllLoans]= useState([])

  useEffect(()=>{
    fetch('https://rimon-coral.vercel.app/allLoanPost')
      .then(res=>res.json())
      .then(loans=>setAllLoans(loans))
  },[])

  const handleLoan=()=>{
    navigate("/loanform")
  }

  return (
    <div className="loan">
      <MainHeader></MainHeader>
      <div className="loan__container">
        <div className="loan__container__button">
        <button onClick={handleLoan} className="btn-semi-green">+Apply for Loan</button>
        <button onClick={()=>navigate('/profile/applyFor')} className="btn-semi-green">Inbox</button>
        </div>
        <div className="loan__container__loanSection">
        {
          allLoans?.length > 0 && allLoans.map(loan=><LoanBox key={loan._id} loan={loan}/>)
        }
        {
          allLoans.length ===0  && "Sorry For Loading ..." 
        }
        </div>
      </div>
    </div>
  );
};

export default Loan;
