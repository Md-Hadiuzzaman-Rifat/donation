import React from "react";
import "./LoanForm.css"
import {useNavigate} from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa";


const LoanForm = () => {
  const navigate= useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/loan')
    }
  return (
    <div className="loanForm">
      <div className="loanForm__container">
        <div className="loanFrom__back" onClick={() => navigate(-1)}> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> </div>
        <h2>LOAN FORM</h2>
        <form className="loanForm__form" onSubmit={handleSubmit}>
          <div>
            Title: Need <input type="text" placeholder="Enter your amount" /> for <input type="text" placeholder="write down the cause"/>
          </div>
          <div>
            Description: <textarea type="text" />
          </div>
          {/* <div>
            Expected payback time(month):{" "}
            <input type="text" placeholder="Enter a digit" />
          </div>
          <div>
            Interest willing to pay{" "}
            <input type="text" placeholder="Enter a number" /> %
          </div>
          <div>
            Payable Amount After Interest{" "}
            <input type="text" />
            Tk
          </div> */}
          <button className="btn-green" type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
