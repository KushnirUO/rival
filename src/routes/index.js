import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageNotFound} from '../pages';
import {PrivateRoute} from './privateRoute'
import {PublicRoute} from './publicRoute'
import {privateRoute, publicRoute} from "./routes.mock";

const Routs = () => (
    <BrowserRouter>
        <Routes>
            {privateRoute.map(page => {
                return (
                    <Route
                        exact
                        path={page.path}
                        key={page.path}
                        element={
                            <PrivateRoute>
                                {page.page}
                            </PrivateRoute>
                        }/>
                );
            })}
            {publicRoute.map((page, key) => {
                return (
                    <Route
                        exact
                        path={page.path}
                        key={key}
                        element={
                            <PublicRoute>
                                {page.page}
                            </PublicRoute>
                        }/>
                );
            })}
            <Route exact path='*' element={
                <PageNotFound/>
            }/>
        </Routes>
    </BrowserRouter>
)

export default Routs;
