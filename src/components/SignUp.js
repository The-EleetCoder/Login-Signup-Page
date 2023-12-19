import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ProfilePicture from "./ProfilePicture";

const SignUp = () => {
  const navigate = useNavigate();
  const { registerDetails, setRegisterDetails, setIsLoggedIn } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const changeHandler = (event) => {
    setRegisterDetails((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (value) => {
    registerDetails.phoneNumber = value;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //phone Number verification
    if (!registerDetails.phoneNumber.match(/^\+?[1-9]\d{1,14}$/)) {
      toast.error("Enter correct Phone number");
      return;
    }

    //email validation
    if (
      !registerDetails.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast.error("Enter correct email");
      return;
    }

    //password validation
    if (!registerDetails.password.match(/[a-z]/)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!registerDetails.password.match(/[A-Z]/)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!registerDetails.password.match(/[0-9]/)) {
      toast.error("Password must contain at least one number");
      return;
    }
    if (registerDetails.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (registerDetails.password != registerDetails.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    //if all the validation passes
    setIsLoggedIn(true);
    console.log("Printing the registerDetails ->>", registerDetails);
    toast.success("Signed in successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="signup-container">
        {/* Register and profile picture */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Register</h1>
          <div>
            <ProfilePicture />
          </div>
        </div>

        <div className="form-content-register">
          {/* name */}
          <div className="name-container">
            {/* firstName */}
            <div className="input-name-field">
              <input
                required
                type="text"
                value={registerDetails.firstName}
                onChange={changeHandler}
                placeholder="Enter first Name"
                name="firstName"
              />
              <MdDriveFileRenameOutline className="icon-1" />
            </div>
            {/* lastName */}
            <div className="input-name-field">
              <input
                required
                type="text"
                value={registerDetails.lastName}
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
              value={registerDetails.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              name="email"
            />
            <HiOutlineMail className="icon" />
          </div>

          {/* phone number */}
          <div className="input-field">
            <PhoneInput
              country={"in"}
              value={registerDetails.phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </div>

          {/* password */}
          <div className="name-container">
            {/* enter password */}
            <div className="input-name-field">
              <input
                required
                type={showPassword ? "text" : "password"}
                value={registerDetails.password}
                onChange={changeHandler}
                placeholder="Enter password"
                name="password"
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <IoMdEye className="icon-1" />
                ) : (
                  <IoMdEyeOff className="icon-1" />
                )}
              </span>
            </div>
            {/* confirm password */}
            <div className="input-name-field">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={registerDetails.confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm password"
                name="confirmPassword"
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (
                  <IoMdEye className="icon" />
                ) : (
                  <IoMdEyeOff className="icon" />
                )}
              </span>
            </div>
          </div>

          {/* signup button */}
          <div className="login-div">
            <button className="login-button">Sign up</button>
          </div>

          {/* Log-in text */}
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
