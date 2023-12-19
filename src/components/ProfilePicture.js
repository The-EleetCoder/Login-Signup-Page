import React, { useRef, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProfilePicture = () => {
  const inputRef = useRef(null);
  const { profilePicture, setProfilePicture } = useContext(AppContext);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="profile-picture-container">
      <div onClick={handleImageClick} className="box-decoration">
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            className="img-display"
          />
        ) : (
          <img src=".././assets/dummyPic.png" className="img-display" />
        )}
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
