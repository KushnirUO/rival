import {get_cookie} from "../../utils/getCookie";

export function handleCheck(){
    if (window.location.pathname === '/register') {
        window.location = '/login';
    }
    else {
        window.location = '/blog';
    }

}