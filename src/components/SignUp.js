import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (value) => {
    formData.phoneNumber = value;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //phone Number verification
    if(!formData.phoneNumber.match(/^\+?[1-9]\d{1,14}$/)){
      toast.error("Enter correct Phone number");
      return;
    }

    //email validation
    if (
      !formData.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast.error("Enter correct email");
      return;
    }

    //password validation
    if (!formData.password.match(/[a-z]/)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!formData.password.match(/[A-Z]/)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!formData.password.match(/[0-9]/)) {
      toast.error("Password must contain at least one number");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    //if all the validation passes
    console.log("Printing the FormData ->>", formData);
    toast.success("Signed in successfully!");
    navigate("/dashboard");
  };
  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="signup-container">
        <h1>Register</h1>
        <div className="form-content-register">
          {/* name */}
          <div className="name-container">
            <div className="input-name-field">
              <input
                required
                type="text"
                value={formData.firstName}
                onChange={changeHandler}
                placeholder="Enter first Name"
                name="firstName"
              />
              <MdDriveFileRenameOutline className="icon-1" />
            </div>
            <div className="input-name-field">
              <input
                required
                type="text"
                value={formData.lastName}
                onChange={changeHandler}
                placeholder="Enter last Name"
                name="lastName"
              />
              <MdDriveFileRenameOutline className="icon" />
            </div>
          </div>
          {/* email */}
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
          {/* phone number */}
          <div className="input-field">
            {/* <input
              required
              type="number"
              value={formData.phoneNumber}
              onChange={changeHandler}
              placeholder="Enter Phone Number"
              name="phoneNumber"
            /> */}
            <PhoneInput
              country={"in"}
              value={formData.phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </div>
          {/* password */}
          <div className="name-container">
            <div className="input-name-field">
              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
                name="password"
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <IoMdEye className="icon-1"/> : <IoMdEyeOff className="icon-1"/>}
              </span>
            </div>
            <div className="input-name-field">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm password"
                name="confirmPassword"
              />
              <span  onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <IoMdEye className="icon"/> : <IoMdEyeOff className="icon"/>}
              </span>
            </div>
            {/* signup button */}
          </div>
          <div className="login-div">
            <button className="login-button">Sign up</button>
          </div>
          <div className="register-text">
            <p>
              Already have an account?{" "}
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
