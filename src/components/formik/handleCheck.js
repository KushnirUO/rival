import {get_cookie} from "../../cookies/getCookie";

export const handleCheck =({email, password}) => {
    const userInfo = JSON.parse(get_cookie('user'));
    if (userInfo.email === email && userInfo.password === password) {
        window.location = '/';
        document.cookie = 'auth=true';
    }
}