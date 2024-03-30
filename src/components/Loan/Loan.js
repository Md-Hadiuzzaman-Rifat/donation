import React from "react";
import LoanBox from "../LoanBox/LoanBox";
import "./Loan.css";

const Loan = () => {
  return (
    <div className="loan">
      <div className="loan__container">
        <div className="loan__container__button">
        <button className="btn-semi-green">+Apply for Loan</button>
        <button className="btn-semi-green">Inbox</button>
        </div>
        <div className="loan__container__loanSection">
        <LoanBox></LoanBox>
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
