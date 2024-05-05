import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import "./LoanBox.css";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";

const LoanBox = ({ loan }) => {
  const navigate = useNavigate();

  const { name, amount, cause, description, email, uid, _id } = loan || {};

  const [user, setUser]= useState(null)
  
  const handleForm = () => {
    navigate(`/offerLoan/${_id}`);
  };

  useEffect(()=>{
    fetch(`http://localhost:2020/findUser/${uid}`)
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[uid])

  const rateUser = () => {
    navigate(`/rate/${uid}`);
  };

  return (
    <div className="loanBox">
      <div className="loanBox__container">
        <div className="loanBox__topSection">
          <div className="loanBox__topSection__person">
            <CgProfile className="icon" />
            {name?.toUpperCase()} : {uid}
          </div>
          <div className="loanBox__topSection__rating">
            <div>
              <button onClick={rateUser} className="btn-semi-green">
                Rate User
              </button>
              <button
                onClick={() => navigate("/profile/applyfor")}
                className="btn-semi-green"
              >
                Message
              </button>
            </div>
            <div>
              {
                user && <Rating initialRating={(user?.rate / user?.count)} readonly />
              }
            </div>
          </div>
        </div>
        <div className="loanBox__middleSection">
          <h3>{cause?.toUpperCase()}</h3>
        </div>
        <div className="loanBox__bottomSection">
          <div></div>
          <div className="loanBox__bottomSection__buttonGroup">
            <button onClick={handleForm} className="btn-semi-green">
              Offer Loan
            </button>
            <button className="btn-semi-green">Lend {amount}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanBox;
