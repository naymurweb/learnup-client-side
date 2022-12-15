import React, { createContext } from "react";
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const name = "mr pranto";
  const authInfo = {
    name,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
