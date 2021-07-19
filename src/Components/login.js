import React, { useState } from "react";
import "./login.css";

import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Page</h1>
        <input
          type="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit_button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
