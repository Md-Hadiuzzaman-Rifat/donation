import React from "react";
import "./ContractPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const ContractPage = () => {
  const { state } = useLocation();
    const {currentUser}= state || {}
    const navigate= useNavigate()

  return (
    <div className="contractPage">
      <div className="contractPage__data">
         <h2>Congratulation! Your Request is Been Accepted.. </h2>
         <p>You have accepted the proposal of <span className="con_bold">{currentUser?.displayName}.</span></p>
        <p>He is Interested to Pay <span className="con_bold">{state?.pay} Taka</span>, with the interest rate <span className="con_bold">15%.</span> .</p>
        <h2> Thank you. For Staying With Us.</h2>
        <button className="btn-green" onClick={()=>navigate('/loan')} style={{marginTop: "10px"}}>Go To Main Page</button>
      </div>
    </div>
  );
};

export default ContractPage;
