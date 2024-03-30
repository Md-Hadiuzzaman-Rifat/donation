import React from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="homeContent">
      <div className="homeContent__container">
        <div className="homeContent__left">
          <img src="./homepage/donation3.svg" alt="" />
        </div>
        <div className="homeContent__middle">
          <div>
            <h3>LOAN</h3>
            <div>
              <p>
                Access financial support tailored for UIU students. Empowering
                the next generation through accessible education financing.
              </p>
              <button className="btn-green">How it Works</button>
              <button className="btn-green">Join Now</button>
            </div>
          </div>
          <div>
            <h3>Crows Sourcing</h3>
            <div>
              <p>
                Join forces with compassionate individuals worldwide to make a
                meaningful impact. Together, we fund essential support for those
                in need.
              </p>
              <button className="btn-green">How it Works</button>
              <button className="btn-green">Join Now</button>
            </div>
          </div>
        </div>
        <div className="homeContent__right">
          <img src="./homepage/donation1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
