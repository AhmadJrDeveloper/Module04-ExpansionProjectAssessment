import {  useContext } from "react";
import { AuthContext } from '../context/authContext';
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ allowedRoles }) => {
    const {user,checkUser} = useContext(AuthContext)
    const has_type = user && allowedRoles.includes(user.user_type);

    if (!user && checkUser ===false) {
        return <Navigate to="/" replace />;
    }

    if (!has_type && checkUser ===false) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute