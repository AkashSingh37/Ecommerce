
import React from 'react';
import './Login.css'; // Import CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-options">
          <p>New user? <a href="#">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
