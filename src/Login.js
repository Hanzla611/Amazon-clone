import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './Firebase';

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const login  = (event) => {
        event.preventDefault(); //stops refresh
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //redirect to hompage

        })
        .catch((e)=> alert(e.message))
    };

    const register  = (event) => {
        event.preventDefault(); //stops refresh
       
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in
            history.push("/");
        })
        .catch((e)=> alert(e.message));
    };
    return (
        <div className="login">
          <Link to = "/">
              <img
              className="login_logo"
              src="signInLogo.png"
              alt=" "
              />
          </Link>

          <div className="login_container">
              <h1>Sign in</h1>
              <form>
                  <h5>E-mail</h5>
                  <input value={email} onChange={ event => setEmail(event.target.value)} type="email" />
                  <h5>Password</h5>
                  <input value ={password}  onChange={ event => setPassword(event.target.value)} type="password" />
                  <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
              </form>
              <p>
                  By signing-in you agree to Amazon's Conditions of Use and Sale.
                  Please see our Privacy Notice, our Cookies Notice and our internet-Based Ads
                  Notice.
              </p>
              <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
          </div>
         
            
        </div>
    )
};

export default Login;
