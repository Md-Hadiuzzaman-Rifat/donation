import React, { useState } from "react";
import "./Transaction.css";
import bkash from "../../img/bkash.png";
import nagad from "../../img/nagad.png";
import upay from "../../img/upay.png";
import visa from "../../img/visa.png";
import master from "../../img/masterCard.png";
import rocket from "../../img/rocket.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const [number, setNumber]= useState("")
  const [tranId, setTranId]= useState("")
  const navigate= useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log(number, tranId);
    navigate('/profile/conform')
  }

  return (
    <div className="transaction__container">
      <div className="transaction__header">
        <h1>Transaction Form</h1>
      </div>
      <div className="transaction__hero-section">
        <div className="payment-type">
          <div className="transaction__payhead">
            <h3>Choose a payment system</h3>
          </div>
          <div className="transaction__icons">
            <img src={bkash} alt="" />
            <img src={rocket} alt="" />
            <img src={nagad} alt="" />
            <img src={upay} alt="" />
            <div className="tran-border">
              <img src={master} alt="" />
            </div>
            <div className="tran-border">
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
        <div className="transaction__right-section">
          <form onSubmit={handleSubmit} className="transaction-ids">
            <div className="mobilenumber">
              <p>Mobile Number/Bank ID</p>
              <br />
              <input
                onChange={e=>setNumber(e.target.value)}
                className="transaction__input-style"
                type="text"
                name="Kola"
                required 
                placeholder="enter your mobile id"
                id=""
              />
            </div>
            <div className="mobilenumber">
              <p>Transaction ID</p>
              <br />
              <input
              onChange={e=>setTranId(e.target.value)}
                className="transaction__input-style"
                type="text"
                name="Kola"
                required
                placeholder="enter your transaction id"
                id=""
              
              />
            </div>
            <div className="transaction__button">
            
              <button type="submit" className="transaction__btn" id="confirm">
                <h3>CONFIRM</h3>
              </button>
      
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
