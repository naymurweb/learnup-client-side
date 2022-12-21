import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading,setLoding]=useState(true)

  const userGoogleSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userGithubSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (userName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoding(false)
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

  const userInfo = {
    user,
    userGoogleSign,
    userGithubSign,
    userLogout,
    userCreate,
    userProfileUpdate,
    userLogin,
    forgotPassword,
    loading
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
