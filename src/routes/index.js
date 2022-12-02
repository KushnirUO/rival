import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageNotFound} from '../pages/pages';
import {PrivateRoute} from './privateRoute'
import {PublicRoute} from './publicRoute'
import {privateRoute, publicRoute} from "./routes.mock";
const Routs = () => (
    <BrowserRouter>
        <Routes>
            {privateRoute.map(v => {
                return (
                    <Route exact path={v.path} element={
                        <PrivateRoute>
                            {v.page}
                        </PrivateRoute>
                    }/>
                );
            })}
            {publicRoute.map(v => {
                return (
                    <Route exact path={v.path} element={
                        <PublicRoute>
                            {v.page}
                        </PublicRoute>
                    }/>
                );
            })}
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routs;
