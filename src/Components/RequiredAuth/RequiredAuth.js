import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';


const RequiredAuth = ({ children }) => {
    let location = useLocation();
    const [user] = useAuthState(auth)
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;