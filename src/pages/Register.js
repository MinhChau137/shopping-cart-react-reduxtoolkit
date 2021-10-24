import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Register.css"

const Register = () => {
  return (
    <form action="/register" className="register-form">
      <h1>Register</h1>
      <input type="text" name="firstName" placeholder="Fistname" />
      <input type="text" name="lastName" placeholder="Lastname" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" required />
      <label htmlFor="check" className="check">
        <input type="checkbox" name="check" required />
        <p>Agreed to term and conditions</p>
      </label>
      <input type="submit" defaultValue="Register" />
      <p>
        Already have one? <Link to = "/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
