import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider,} from "@mui/material";
import {BlogView, CreateView, FileView, LoginView, RegisterView, PageNotFound} from './pages/pages';
import './App.css';
import {theme} from './theme/index'

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BlogView/>}/>
                <Route path="create" element={<CreateView/>}/>
                <Route path="fileView" element={<FileView/>}/>
                <Route path="login" element={<LoginView/>}/>
                <Route path="register" element={<RegisterView/>}/>
                <Route path="/:pageName" element={<PageNotFound/>}/>

            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)

export default App;
