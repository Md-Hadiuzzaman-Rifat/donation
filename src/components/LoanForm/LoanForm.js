import React, { useEffect } from "react";
import "./LoanForm.css";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LoanForm = () => {
  const [amount, setAmount] = useState("");
  const [cause, setCause] = useState("");
  const [desc, setDesc] = useState("");

  const { currentUser } = useAuth() || {};
  const { uid, email, displayName } = currentUser || {};

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result= fetch("http://localhost:2020/loanPost", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name:displayName, amount, cause, desc, email, uid }),
    });
    console.log(result);
  };

  return (
    <div className="loanForm">
      <div className="loanForm__container">
        <div className="loanFrom__back" onClick={() => navigate(-1)}>
          {" "}
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>{" "}
        </div>
        <h2>LOAN FORM</h2>
        <form className="loanForm__form" onSubmit={handleSubmit}>
          <div>
            Title: Need{" "}
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              placeholder="Enter your amount"
            />{" "}
            for{" "}
            <input
              onChange={(e) => setCause(e.target.value)}
              type="text"
              placeholder="write down the cause"
            />
          </div>
          <div>
            Description:{" "}
            <textarea onChange={(e) => setDesc(e.target.value)} type="text" />
          </div>

          <button className="btn-green" type="submit">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
