import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    
  const userGoogleSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userGithubSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const name = "mr pranto";
  const userInfo = { name, userGoogleSign, userGithubSign };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
