import React, { useState } from "react";
import LoanBox from "../LoanBox/LoanBox";
import "./Loan.css";
import LoanForm from "../LoanForm/LoanForm";
import {useNavigate} from "react-router-dom"

const Loan = () => {

  const navigate= useNavigate()

  const handleLoan=()=>{
    navigate("/loanform")
  }

  return (
    <div className="loan">
      <div className="loan__container">
        <div className="loan__container__button">
        <button onClick={handleLoan} className="btn-semi-green">+Apply for Loan</button>
        <button className="btn-semi-green">Inbox</button>
        </div>
        <div className="loan__container__loanSection">
        <LoanBox></LoanBox>
        <LoanBox></LoanBox>
        <LoanBox></LoanBox>
        <LoanBox></LoanBox>
        </div>
      </div>
    </div>
  );
};

export default Loan;
