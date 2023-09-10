import config from "../config";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {

    if (!localStorage.getItem('user')) {
        return <Navigate to={config.routes.login} />
    }

    return children;
}