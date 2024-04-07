import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__flex">
          <div className="login__container__flex__left">
            <img src="/resoruces/wallet.png" alt="" />
          </div>
          <div className="login__container__flex__right">
            <h1 className="register-heading">Sign In</h1>
            <p>Sign in and get financial help!</p>
            <form className="login__form" onSubmit={handleSubmit}>
              
                <input type="email" placeholder="Email" id="utuEmail" name="utuEmail" required />
      
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Password"
                  required
                />
              <button className="btn-green" type="submit">
                Sign In
              </button>
              <p style={{margin:"0 auto"}}>or</p>
              <button className="btn-green login-button" >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
