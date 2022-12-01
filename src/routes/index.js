import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BlogView, CreateView, FileView, LoginView, RegisterView, PageNotFound} from '../pages/pages';
import {PrivateRoute} from './privateRoute'

const Routs = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={
                <PrivateRoute>
                    <BlogView/>
                </PrivateRoute>
            }/>
            <Route path="create" element={<CreateView/>}/>
            <Route path="fileView" element={<FileView/>}/>
            <Route path="login" element={<LoginView/>}/>
            <Route path="register" element={<RegisterView/>}/>
            <Route path="/:pageName" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routs;
