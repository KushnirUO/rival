import {Navigate} from 'react-router-dom';

export function PrivateRoute({ children }) {
    function get_cookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results) return (unescape(results[2]));
        else return null;
    }
    document.cookie='auth=true'
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