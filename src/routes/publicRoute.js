import {Navigate} from 'react-router-dom';
import {get_cookie} from "../cookies/getCookie";

export function PublicRoute({ children }) {
    // document.cookie='auth=false'
    if(get_cookie('auth')===null)document.cookie='auth=false';
    const isLoggedIn = get_cookie('auth')
    return (
        <>
            {isLoggedIn === "false"
                ? children
                : <Navigate to="/"/>
            }
        </>
    );
}