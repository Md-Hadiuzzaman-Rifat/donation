import React from "react";
import "./LoanForm.css"

const LoanForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="loanForm">
      <div className="loanForm__container">
        <h2>LOAN FORM</h2>
        <form className="loanForm__form" onSubmit={handleSubmit}>
          <div>
            Title: Need <input type="text" placeholder="Enter your amount" /> for <input type="text" placeholder="write down the cause"/>
          </div>
          <div>
            Description: <input type="text" />
          </div>
          <div>
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
          </div>
          <button classname="btn-green" type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
