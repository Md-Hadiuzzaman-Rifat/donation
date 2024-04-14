import React, { useEffect, useState } from "react";
import ProfileLayout from "../ProfileLayout/ProfileLayout";
import "./ApplyFor.css"
import { useAuth } from "../../context/AuthContext";
import InformationBox from "../InformationBox/InformationBox";
  

const ApplyFor = () => {

  const {currentUser}= useAuth()
  const {uid}= currentUser || {}
  const [loanPost, SetLoanPost]= useState([])

  useEffect(()=>{
    fetch(`http://localhost:2020/userLoan/${uid}`)
      .then(res=>res.json())
      .then(data=>SetLoanPost(data))
  }, [uid])

  return (
    <ProfileLayout>
      <div className="applyFor">
        <div className="applyFor__container">
          <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
          {
            loanPost?.length === 0 && <p>You Did Not Apply For Any Loan</p>
          }
          {
            loanPost?.length > 0 && loanPost.map(item=><InformationBox key={item._id} data={item}/>)
          }
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ApplyFor;
