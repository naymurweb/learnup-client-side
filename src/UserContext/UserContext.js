import React, { createContext } from 'react';
export const AuthContext=createContext()

const UserContext = ({children}) => {
    const name='mr pranto';
    const userInfo={name}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UserContext;