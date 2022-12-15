import {BlogView, CreateView, FileView, LoginView, RegisterView} from '../pages/pages';

export const publicRoute = [
    {
        page: <LoginView/>,
        path: 'login'
    },
    {
        page: <RegisterView/>,
        path: 'register'
    },
];
export const privateRoute = [
    {
        page: <CreateView/>,
        path: 'create'
    },
    {
        page: <FileView/>,
        path: 'fileView'
    },
    {
        page: <BlogView/>,
        path: 'blog'
    },
];

