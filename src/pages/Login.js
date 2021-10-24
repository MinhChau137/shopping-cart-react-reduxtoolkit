import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Login.css"

const Login = () => {
  return (
    <form action="/login" className="login-form">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" required />
      <input type="submit" defaultValue="Login" />
      <p>
        Don't have account? <Link to = "/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
