import React from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
    return (
        <div className="login">
          <Link to = "/">
              <img
              className="login_logo"
              src="ama2.png"
              alt=""
              />
          </Link>

          <div className="login_contaner">
              <h1>Sign in</h1>
              <form>
                  <h5>E-mail</h5>
                  <input type="text" />
              </form>
          </div>
         
            
        </div>
    )
}

export default Login
