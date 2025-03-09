// src/components/ProtectedRoute.js

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import PropTypes from "prop-types";

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <Navigate to="/home" replace /> : <Component {...rest} />;
};



//For PropsType Validation
ProtectedRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
};


export default ProtectedRoute;



//For PropsType Validation