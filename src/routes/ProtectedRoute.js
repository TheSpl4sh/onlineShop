import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector(
        (state) => state.loginCustomer.isAuthenticated
    );
    const location = useLocation();

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/auth" state={{ from: location }} replace />
    );
}

export default ProtectedRoute;
