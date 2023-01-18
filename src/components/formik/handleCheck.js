
export function handleCheck(){
    if (window.location.pathname === '/register') {
        window.location = '/login';
    }
    else {
        window.location = '/blog';
    }

}