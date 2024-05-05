import React, { useEffect, useState } from "react";
import "./OfferLoan.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";


const OfferLoan = () => {
  const navigate= useNavigate()
  const {currentUser}= useAuth()
  const [payTime, setPayTime]= useState("")
  const [pay, setPay]= useState(0)
  const [interest, setInterest]= useState("")

  const [amount, setAmount]= useState("")

  const {id}= useParams()

  useEffect(()=>{
    fetch(`https://rimon-coral.vercel.app/singleLoan/${id}`)
    .then(res=>res.json())
    .then(data=>setAmount(data?.amount))
  },[id])

  useEffect(()=>{
    setPay((parseInt(amount) * parseInt(interest))/100 + parseInt(amount) || 0)
  },[amount, interest])
  

  const body={loan_id:id, payTime, pay, interest, currentUser}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result= fetch("https://rimon-coral.vercel.app/offerLoan", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    navigate('/loan')
  };
  return (
    <div className="loanForm">
      <div className="loanForm__container">
      <div className="loanFrom__back" onClick={() => navigate(-1)}> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> </div>
        <h2>OFFER LOAN</h2>
        <form className="loanForm__form" onSubmit={handleSubmit}>
          <div>
            Expected Return Time(month):{" "}
            <input type="text" required placeholder="Enter a digit"  onChange={e=>setPayTime(e.target.value)} value={payTime}/>
          </div>
          <div>
            Interest willing to pay{" "}
            <input type="text" required placeholder="Enter a number" onChange={e=>setInterest(e.target.value)} value={interest}/> %
          </div>
          <div>
            Payable Amount After Interest <input  readOnly type="text" value={pay}/>
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
