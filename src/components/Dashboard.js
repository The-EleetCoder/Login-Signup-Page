import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { registerDetails, profilePicture, setIsLoggedIn } =
    useContext(AppContext);
  const { firstName, lastName, email, password, phoneNumber } = registerDetails;
  return (
    <div>
      {/* details */}
      <p>{`Hello ${firstName}! How you doin?`}</p>
      <p>You details are as follows: </p>
      <p>
        name: {firstName} {lastName}
      </p>
      <p>email: {email}</p>
      <p>password: {password}</p>
      <p>phoneNumber: {phoneNumber}</p>

      {/* profile picture */}
      <div>
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            className="img-display"
          />
        ) : (
          <img src=".././assets/dummyPic.png" className="img-display" />
        )}
      </div>

      {/* log out button */}
      <div>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            toast.success("Logged out successfully!");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
