import React from "react";
import "./Conform.css";
import { useNavigate } from "react-router-dom";

const Conform = () => {
    const navigate=useNavigate()

  return (
    <div className="conform">
      <div className="conform__container">
        <div className="confirm__text">
          <h1>THANK YOU FOR YOUR KIND DONATION</h1>
          <button onClick={()=>navigate("/loan")} className="btn-green">Back to Loan Page</button>
        </div>
      </div>
    </div>
  );
};

export default Conform;
