import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log(result);
         
        if (result.data === 'success') {
          dispatch({ type: 'LOGIN', payload: email });
          navigate('/');
          alert(`Welcome ${email}`);
        }
        
      })
      .catch((err) => window.alert('Please check the details'));
  };

  return (
    <div className="login-container"  >
      <form className="login-form" >
        <h1 >Login</h1>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="required " >Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">
          <button type="button" onClick={handleLogin} >
            Login
          </button>
        </div>
        <p>Create a new account: </p>
        <button type="button" >
        <Link to="/signup" className="nanan">Register</Link></button>
      </form>
    </div>
  );
};
export default Login;