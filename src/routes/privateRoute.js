import {Navigate} from 'react-router-dom';
import {get_cookie} from "../utils/getCookie";

export function PrivateRoute({ children }) {

    const isLoggedIn = get_cookie('auth')
    return (
        <>
            {isLoggedIn === "true"
                ? children
                : <Navigate to="/login"/>
            }
        </>
    );
}