import { createContext, useState } from "react";

// context creation
export const AppContext = createContext();

// create Provider
export function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  // object which contains all the required data
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    registerDetails,
    setRegisterDetails,
    profilePicture,
    setProfilePicture,
    loginDetails,
    setLoginDetails
  };

  // returning the provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
