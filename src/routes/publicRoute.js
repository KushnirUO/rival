import {Navigate} from 'react-router-dom';
import {get_cookie} from "../utils/getCookie";
import Blog from "./pagin";

export function PublicRoute({ children }) {
    if(get_cookie('auth')===null)document.cookie='auth=false';
    const isLoggedIn = get_cookie('auth')
    return (
        <>
            {isLoggedIn === "false"
                ? children
                : <Navigate to='/blog'/>
            }
        </>
    );
}