import React from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="homeContent">
      <div className="homeContent-container">
        <div className="homeContent__first flex-same">
          <div className="homeContent__first__image">
            <img src="./homepage/donation3.svg" alt="" />
          </div>
          <div className="homeContent__first__content">
            <p className="homeContent_para">Loan</p>
            <div className="homeContent__content__box">
              <p>
                Access financial support tailored for UIU students. Empowering
                the next generation through accessible education financing.
              </p>
              <button className="btn-green">How it Works</button>
              <button className="btn-green">Join Now</button>
            </div>
          </div>
        </div>
        <div className="homeContent__second flex-same">
          {/* start  */}
          <div className="homeContent__second__image">
            <img src="./homepage/donation1.svg" alt="" />
          </div>
          <div className="homeContent__second__content">
            <p className="homeContent_para">Crowd Sourcing</p>
            <div className="homeContent__content__box">
              <p>
                Join forces with compassionate individuals worldwide to make a
                meaningful impact. Together, we fund essential support for those
                in need.
              </p>
              <button className="btn-green">How it Works</button>
              <button className="btn-green">Join Now</button>
            </div>
          </div>
          {/* end  */}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
