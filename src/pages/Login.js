import React, { useState } from 'react';
import './Login.css';
import googleLogo from '../images/google.png';
import facebookLogo from '../images/facebook.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Access Now</h2>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-options">
            <label>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)}
              /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="separator">
            <span>━━━━━━━━━━  OR  ━━━━━━━━━━</span>
          </div>
          <div className="social-logins">
            <button className="google-login">
              <img src={googleLogo} alt="Google Login" />
            </button>
            <button className="facebook-login">
              <img src={facebookLogo} alt="Facebook Login" />
            </button>
          </div>
        </form>
      </div>
      <div className="login-banner">
        <h1>Welcome Back!</h1>
        <p> Access Your <strong>Rentals <br /></strong> </p>
        <h2>
        & <strong className="highlight"> Rock Your Events.</strong>
        </h2> 
        <button className="banner-button">Button</button>
      </div>
    </div>
  );
};

export default Login;