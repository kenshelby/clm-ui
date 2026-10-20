import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Protected = ({ children }) => {

    const user = useSelector(state => state.user)

    return user ? children : <Navigate to="/login" replace />
}

export default Protected;