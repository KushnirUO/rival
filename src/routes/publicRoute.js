import {Navigate} from 'react-router-dom';
import store from "../store/store";

export function PublicRoute({ children }) {
    const isLoggedIn = store.getState().users.auth;
    return (
        <>
            {isLoggedIn === false
                ? children
                : <Navigate to='/blog'/>
            }
        </>
    );
}