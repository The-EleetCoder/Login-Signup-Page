import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { loginDetails, setLoginDetails } = useContext(AppContext);

  const changeHandler = (event) => {
    setLoginDetails((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //email validation
    if (
      !loginDetails.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast.error("Enter correct email");
      return;
    }

    //if validation passes
    console.log("Printing the loginDetails ->", loginDetails);
    toast.success("Logged in");
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <form className="container" onSubmit={submitHandler}>
        <h1>Login</h1>
        <div className="form-content">
          {/* email */}
          <div className="input-field">
            <input
              required
              type="email"
              value={loginDetails.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              name="email"
            />
            <HiOutlineMail className="icon" />
          </div>

          {/* password */}
          <div className="input-field">
            <input
              required
              type="password"
              value={loginDetails.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
            />
            <FaLock className="icon" />
          </div>

          {/* login button */}
          <div className="login-div">
            <button className="login-button">Login</button>
          </div>

          {/* register text */}
          <div className="register-text">
            <p>
              New user?{" "}
              <a
                onClick={() => {
                  navigate("./signup");
                }}
              >
                {" "}
                Register
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
