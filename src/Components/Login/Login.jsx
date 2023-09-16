// Login.js
import React, { useState } from 'react';
import './Login.css'; // Certifique-se de que o caminho para o arquivo CSS está correto.
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const[action,setAction]=useState("Login");
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
          <div className="underline">
          </div>
          <div className="inputs">
            {/* inputs */}
            {action==="Login"?<div></div>:  <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Name'/>
            </div>}
          
            {/* inputs */}
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email' />
            </div>
            {/* inputs */}
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password'/>
            </div>
          </div>
          {action==="Login"?<div></div>:          <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}

          <div className="submit-container">
  <div
    className={action === "Login" ? "submit gray" : "submit"}
    onClick={() => {
      setAction("Sign Up");
    }}
  >
    Sign Up
  </div>
  <div
    className={action === "Sign Up" ? "submit gray" : "submit"}
    onClick={() => {
      setAction("Login");
    }}
  >
    Login
  </div>
</div>

        
        
      </div>
    </div>
  );
}

export default Login;
