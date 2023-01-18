import {Navigate} from 'react-router-dom';
import store from "../store/store";

export function PrivateRoute({ children }) {
    const isLoggedIn = store.getState().users.auth;
    return (
        <>
            {isLoggedIn === true
                ? children
                : <Navigate to="/login"/>
            }
        </>
    );
}