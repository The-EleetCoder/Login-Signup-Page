import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { registerDetails, profilePicture } = useContext(AppContext);
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
    </div>
  );
};

export default Dashboard;
