import {get_cookie} from "./getCookie";

export const handleCheck =({email, password}) => {
    const userInfo = JSON.parse(get_cookie('user'));
    console.log(1)
    if (userInfo.email === email && userInfo.password === password) {
        window.location = '/';
        document.cookie = 'auth=true';
    }
}