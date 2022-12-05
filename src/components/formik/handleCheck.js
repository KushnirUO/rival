import {get_cookie} from "../../cookies/getCookie";

export const handleCheck =(values) => {
    if (window.location.pathname === '/register') {
        document.cookie = 'user=' + JSON.stringify(values);
        document.cookie = 'auth=false';
        window.location = '/login';
    } else
    {
        const userInfo = JSON.parse(get_cookie('user'));
        if (userInfo.email === values.email && userInfo.password === values.password) {
            window.location = '/';
            document.cookie = 'auth=true';
        }
    }
}