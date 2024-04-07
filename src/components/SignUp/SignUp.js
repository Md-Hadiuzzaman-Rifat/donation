import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const handleSubmit = () => {};
  return (
    <div className="signUp">
      <div className="signUp__container">
        <div className="signUp__container__flex">
          <div className="signUp__container__flex__left">
            <img src="/resoruces/wallet.png" alt="" />
          </div>
          <div className="signUp__container__flex__right">
            <h1>Sign Up</h1>
            <p>Sign up and get financial help</p>
            <form className="signUp__form" onSubmit={handleSubmit}>
              <div className="signUp__form-flex">
                <div className="input-level">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className="input-level">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="signUp__form-flex">
                <div className="input-level">
                  <label htmlFor="uiuID">UIU ID</label>
                  <input type="text" id="uiuID" name="uiuID" required />
                </div>

                <div className="input-level">
                  <label htmlFor="uiuIDCard">UIU ID Card Picture</label>
                  <input
                    type="file"
                    id="uiuIDCard"
                    name="uiuIDCard"
                    accept="image/*"
                    required
                  />
                </div>
              </div>

              <div className="input-level">
                <label htmlFor="utuEmail" class="uiu-email">
                  UIU Email Address
                </label>
                <input type="email" id="utuEmail" name="utuEmail" required />
              </div>

              <div className="signUp__form-flex">
                <div className="input-level">
                  <label htmlFor="gender" class="GENDER">
                    Gender
                  </label>
                  <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="input-level">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    placeholder="MM/DD/YY"
                    required
                  />
                </div>
              </div>

              <div className="input-level">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="input-level">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
              </div>

              <button className="btn-green" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
