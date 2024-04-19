import React, { useEffect, useState } from "react";
import "./OfferLoan.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";


const OfferLoan = () => {
  const navigate= useNavigate()
  const {currentUser}= useAuth()

  const [title, setTitle]= useState("")
  const [cause, setCause]= useState("")
  const [desc, setDesc]= useState("")
  const [payTime, setPayTime]= useState("")
  const [pay, setPay]= useState("")
  const [interest, setInterest]= useState("")

  const {id}= useParams()
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://donation-backend-omega.vercel.app/offerLoan`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({loan_id:id, title, cause, desc, payTime, pay, interest, currentUser})
    })
    navigate('/loan')
  };

  return (
    <div className="loanForm">
      <div className="loanForm__container">
      <div className="loanFrom__back" onClick={() => navigate(-1)}> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> </div>
        <h2>LOAN FORM</h2>
        <form className="loanForm__form" onSubmit={handleSubmit}>
          <div>
            Title: Need <input type="text" placeholder="Enter your amount" onChange={e=>setTitle(e.target.value)}/>{" "}
            for <input type="text" placeholder="write down the cause" onChange={e=>setCause(e.target.value)} />
          </div>
          <div>
            Description: <input type="text" onChange={e=>setDesc(e.target.value)} />
          </div>
          <div>
            Expected payback time(month):{" "}
            <input type="text" placeholder="Enter a digit"  onChange={e=>setPayTime(e.target.value)}/>
          </div>
          <div>
            Interest willing to pay{" "}
            <input type="text" placeholder="Enter a number" onChange={e=>setPay(e.target.value)}/> %
          </div>
          <div>
            Payable Amount After Interest <input type="text" onChange={e=>setInterest(e.target.value)}/>
            Tk
          </div>
          <button className="btn-green" type="submit">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferLoan;
