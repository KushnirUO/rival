import {Navigate} from 'react-router-dom';
import {get_cookie} from "../utils/getCookie";
import Blog from "./pagin";
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