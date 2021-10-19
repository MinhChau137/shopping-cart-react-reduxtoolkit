import React from 'react';
import "../Login/Login.css"

const Login = () => {
  return (
    <form action="Login.html" className="login-form">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" required />
      <input type="submit" defaultValue="Login" />
      <p>
        Don't have account? <a href="#">Register</a>
      </p>
    </form>
  );
};

export default Login;
