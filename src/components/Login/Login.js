import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"
import {useState} from "react"
import { useAuth } from "../../context/AuthContext";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const {login}= useAuth()
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    navigate('/')
  };

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
              
                <input
                onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" id="utuEmail" name="utuEmail" required />
      
                <input
                onChange={e=>setPassword(e.target.value)}
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
              <Link to="/register">
              <button className="btn-green login-button" >
                Register
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
