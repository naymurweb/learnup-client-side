import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState("");

  const userGoogleSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userGithubSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("user sign out!");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userLogout = () => {
    return signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => console.log(error));
  };

  const name = "mr pranto";
  const userInfo = { name, userGoogleSign, userGithubSign, user,userLogout };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
