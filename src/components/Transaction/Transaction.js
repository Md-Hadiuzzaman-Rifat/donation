import React from "react";
import "./Transaction.css";
import back from "../../img/back.png";
import bkash from "../../img/bkash.png";
import nagad from "../../img/nagad.png";
import upay from "../../img/upay.png";
import masterCard from "../../img/masterCard.png";
import visaCard from "../../img/visa.png";

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="transaction__container">
        <div className="transaction__top">
          <img src={back} alt="" />
          <h1>Transaction Form</h1>
        </div>
        <div className="transaction__main">
            <div className="transaction___main__left">
                
            </div>
            <div className="transaction___main__right">

            </div>

        </div>
      </div>
    </div>
  );
};

export default Transaction;
