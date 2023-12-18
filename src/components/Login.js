import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //email validation
    if (
      !formData.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast.error("Enter correct email");
      return;
    }
    console.log("Printing the FormData ->>", formData);
    toast.success("Logged in");
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <form className="container" onSubmit={submitHandler}>
        <h1>Login</h1>
        <div className="form-content">
          <div className="input-field">
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              name="email"
            />
            <HiOutlineMail className="icon" />
          </div>
          <div className="input-field">
            <input
              required
              type="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
            />
            <FaLock className="icon" />
          </div>
          <div className="login-div">
            <button className="login-button">
              Login
            </button>
          </div>
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
