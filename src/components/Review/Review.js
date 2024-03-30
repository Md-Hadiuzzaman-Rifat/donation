import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review__container">
        <div className="review__container__top">
          <div>
            <h3>Rashid Bin Hamza</h3>
            <p>Title: Need 500 tk for grocery supply</p>
          </div>
          <div>
            <h3>Rating: 5 star</h3>
            <button className="btn-green">Loan 500tk</button>
          </div>
        </div>
        <div className="review__container__middle">
            <div className="review__container__middle__content">
            <h4>Description: </h4>
          <span>
             The end of the month is already near. So I am 500 tk short of
            grocery supply. If I don`t get the money I will have to spend my day
            without any food
          </span>
            </div>
          
          <div className="review__container__middle__content">
          <h4>Expected Payback time (months): </h4> <span> 1 month</span>
          </div>
          
          <div className="review__container__middle__content">
          <h4>Interest willing to pay: </h4>
          <span> 0%</span>
          </div>
          
          <h4>*Lender will get 500tk after 1 month of payment* </h4>
        </div>
        <div className="review__container__end">
          <div className="review__container__end__input">
            <CgProfile className="icon"></CgProfile>
            <input type="text" placeholder="Add a comment" />
          </div>
          <div className="review__container__end__input">
            <CgProfile className="icon"></CgProfile>
            <input type="text" placeholder="Check Inbox" />
          </div>
          <div className="review__container__end__input">
            <CgProfile className="icon"></CgProfile>
            <input type="text" placeholder="1.5% interest pay korte parle interested" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
